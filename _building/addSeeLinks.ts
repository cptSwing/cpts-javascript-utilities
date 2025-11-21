import { Project } from 'ts-morph';

// No trailing slash here!
const GITHUB_BASE = 'https://github.com/cptSwing/cpts-javascript-utilities/blob/main';
const declarationsPath = 'dist/index.d.ts';

try {
    const project = new Project({
        tsConfigFilePath: './tsconfig.json',
    });

    const rootDirectory = project.getRootDirectories()[0].getPath();
    if (!rootDirectory) throw new Error('No Rootdirectory found!');

    const declarationsFile = project.addSourceFileAtPath(declarationsPath);
    if (!rootDirectory) throw new Error(`No file found at ${declarationsPath}!`);

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

    const functionDeclarations = declarationsFile.getFunctions();
    if (!functionDeclarations.length) throw new Error(`No function declarations found in declarations file!`);

    for (const functionDeclaration of functionDeclarations) {
        const functionDeclarationName = functionDeclaration.getName();

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
                console.log(`additional @see tag added to ${functionDeclarationName}'s declaration`);
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
            console.log(`@see tag added to ${functionDeclarationName}'s declaration`);
        }
    }

    project.saveSync();
} catch (error) {
    throw error;
}
