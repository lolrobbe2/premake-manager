const { build } = require('esbuild');
const { dependencies } = require('./package.json');

// List of external dependencies to exclude from the bundle
const external = ['vscode'];
build({
    entryPoints: ['./src/extension.ts'],
    bundle: true,
    platform: 'node',
    target: 'node20', // Set the target to Node.js 20
    external: external,
    outfile: './out/extension.js',
}).catch(() => process.exit(1));
