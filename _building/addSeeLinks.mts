import { FunctionDeclaration, Project, SourceFile } from 'ts-morph';

// No trailing slash here!
const GITHUB_BASE = 'https://github.com/cptSwing/cpts-javascript-utilities/blob/main';
const declarationsPath = 'dist/index.d.ts';
const ignoredFileNames = ['index'];

try {
    const project = new Project({
        tsConfigFilePath: './tsconfig.json',
    });

    const rootDirectory = project.getRootDirectories()[0].getPath();
    if (!rootDirectory) throw new Error('No Rootdirectory found!');

    const sourceFiles = project.getSourceFiles();
    if (!sourceFiles.length) throw new Error(`No source files found in project!`);

    const sourceFilesData = sourceFiles.map((sourceF) => {
        const baseNameWithoutExtension = sourceF.getBaseNameWithoutExtension();
        const filePath = sourceF.getFilePath();
        const githubUrl = GITHUB_BASE + filePath.replace(rootDirectory, '');

        return {
            baseNameWithoutExtension,
            githubUrl,
        };
    });

    const declarationsFile = project.addSourceFileAtPath(declarationsPath);
    if (!rootDirectory) throw new Error(`No file found at ${declarationsPath}!`);

    const functionDeclarations = declarationsFile.getFunctions();
    if (!functionDeclarations.length) throw new Error(`No function declarations found in declarations file!`);

    if (functionDeclarations.length !== sourceFiles.length) {
        checkDeclarations(functionDeclarations, sourceFiles);
    }

    const created: string[] = [];
    const added: string[] = [];

    for (const functionDeclaration of functionDeclarations) {
        const functionDeclarationName = functionDeclaration.getName();
        if (!functionDeclarationName) throw new Error(`Function declaration has no name!`);

        const sourceFileData = sourceFilesData.find((sourceFileData) => sourceFileData.baseNameWithoutExtension === functionDeclarationName);
        if (!sourceFileData) throw new Error(`No sourceFileData found for function declaration "${functionDeclarationName}"!`);

        const newTagText = `{@link ${sourceFileData.githubUrl}|Source @ GitHub}`;

        let jsDoc = functionDeclaration.getJsDocs()[0];
        if (jsDoc) {
            const seeTags = jsDoc.getTags().filter((tag) => tag.getTagName() === 'see');
            if (seeTags.some((tag) => tag.getCommentText() === newTagText)) {
                console.warn(`@see tag with link to github already present on ${functionDeclarationName}'s declaration, skipping`);
            } else {
                jsDoc.addTag({
                    tagName: 'see',
                    text: newTagText,
                });
                added.push(functionDeclarationName);
            }
        } else {
            jsDoc = functionDeclaration.addJsDoc({
                description: '\n',
                tags: [
                    {
                        tagName: 'see',
                        text: newTagText,
                    },
                ],
            });
            created.push(functionDeclarationName);
        }
    }

    project.saveSync();

    created.length && console.log(`JSDoc Updates: @see link created for ${created.join(', ')}`);
    added.length && console.log(`JSDoc Updates: @see link added to ${added.join(', ')}`);
} catch (error) {
    console.error(error);
}
function checkDeclarations(functionDeclarations: FunctionDeclaration[], sourceFiles: SourceFile[]) {
    const funcDeclData = [functionDeclarations, 'functionDeclarations'] as [FunctionDeclaration[], string];
    const srcFilesData = [sourceFiles, 'sourceFiles'] as [SourceFile[], string];

    const funcDeclarationsIsLonger = functionDeclarations.length > sourceFiles.length;
    const largest = funcDeclarationsIsLonger ? funcDeclData : srcFilesData;
    const smallest = largest === funcDeclData ? srcFilesData : funcDeclData;

    const [largestArray, largestArrayName] = largest;
    const [smallestArray, smallestArrayName] = smallest;

    const notInSmaller: string[] = [];

    largestArray.forEach((elem: SourceFile | FunctionDeclaration, idx: number) => {
        const largestName = (elem as SourceFile).getBaseNameWithoutExtension?.() ?? (elem as FunctionDeclaration).getName?.();
        const hasLargestName = smallestArray.some(
            (elem: SourceFile | FunctionDeclaration) =>
                largestName === ((elem as SourceFile).getBaseNameWithoutExtension?.() ?? (elem as FunctionDeclaration).getName?.())
        );

        !hasLargestName && notInSmaller.push(largestName);
    });

    if (!notInSmaller.some((name) => ignoredFileNames.includes(name))) {
        throw new Error(`${smallestArrayName} is missing ${notInSmaller.length} function from ${largestArrayName}: ${notInSmaller.join(', ')}!`);
    }
}
