const { cpSync } = require('fs');
const { join } = require('path');
const { build } = require('esbuild');
const { dependencies } = require('./package.json');
const { execSync } = require('child_process');


function buildMediaComponents() {
    const subProjects = [
        'src/registry/media/details',
        'src/registry/media/modules',
        'src/registry/media/libraries'
    ];
    console.log('Building media sub-projects...');
    subProjects.forEach(dir => {
        execSync('npm run build', { cwd: dir, stdio: 'inherit' });
    });
}

buildMediaComponents();

// List of external dependencies to exclude from the bundle
const external = ['vscode'];
build({
    entryPoints: ['./src/extension.ts'],
    sourcemap: true,
    bundle: true,
    platform: 'node',
    target: 'node20', // Set the target to Node.js 20
    external: external,
    outfile: './out/extension.js',
    format: 'cjs'
}).then(() => {
    // Copy resources folder
    cpSync('resources', join('out', 'resources'), { recursive: true });
}).catch(() => process.exit(1));
