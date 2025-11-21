import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIG ---------------------------------------------------------------

// Location of your compiled types:
const DTS_ROOT = path.join(__dirname, '../dist');

// Base URL to your GitHub repo (no leading slash at the end):
// Example: https://github.com/user/repo/blob/main
const GITHUB_BASE = 'https://github.com/cptSwing/cpts-javascript-utilities/blob/main';

// --------------------------------------------------------------------------

walk(DTS_ROOT, (filePath) => {
    if (!filePath.endsWith('.d.ts')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    const relative = normalizePath(path.relative(path.join(__dirname, '..'), filePath));
    const githubUrl = `${GITHUB_BASE}/${relative}`;

    // Skip if already contains @see for this URL <-- wrong comment tbh
    if (content.includes(githubUrl)) return;

    // Regex to match exported function/class/interface declarations
    const exportRegex = /(export\s+(?:declare\s+)?(?:function|class|interface|type)\s+[A-Za-z0-9_]+)/g;

    content = content.replace(exportRegex, (match) => {
        return `/**\n` + ` * @see ${githubUrl}\n` + ` */\n` + match;
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Added @see links to', relative);
});

function walk(dir: string, callback: (filePath: string) => void) {
    for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) walk(full, callback);
        else callback(full);
    }
}

function normalizePath(p: string) {
    return p.replace(/\\/g, '/');
}

console.log('Done adding GitHub @see links.');
