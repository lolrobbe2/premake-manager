const fs = require('fs');
const { cpSync } = require('fs');
const crypto = require('crypto');
const { globSync } = require('glob');
const { join } = require('path');
const { build } = require('esbuild');
const { execSync } = require('child_process');
const path = require('path');
const inspector = require('inspector');

if (inspector.url() !== undefined) {
    inspector.close();
}
// ANSI Color Constants
const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    red: "\x1b[31m"
};

function getFolderHash(folderPath) {
    const files = globSync(`${folderPath}/**/*.{ts,tsx,js,jsx,css,html,json}`, {
        ignore: ['**/node_modules/**', '**/dist/**', '**/out/**', '**/target/**']
    });

    const hash = crypto.createHash('sha1');
    files.sort().forEach(file => {
        const content = fs.readFileSync(file);
        hash.update(file);
        hash.update(content);
    });
    return hash.digest('hex');
}

function buildMediaComponents() {
    const MEDIA_ROOT = 'src/registry/media';
    const COMPONENTS = ['details', 'modules', 'libraries', 'editor'];
    const CACHE_FILE = path.join(process.cwd(), '.build_cache.json');

    let cache = {};
    if (fs.existsSync(CACHE_FILE)) {
        try {
            cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
        } catch (e) { cache = {}; }
    }

    console.log(`${colors.bright}${colors.cyan}▶ Checking media sub-projects for changes...${colors.reset}`);

    const silentEnv = { ...process.env };
    delete silentEnv.NODE_OPTIONS;
    delete silentEnv.NODE_CHANNEL_FD;

    let changed = false;

    COMPONENTS.forEach(name => {
        const projectPath = path.join(MEDIA_ROOT, name);
        const currentHash = getFolderHash(projectPath);

        if (cache[name] === currentHash) {
            console.log(`  ${colors.blue}cached${colors.reset} ${name}`);
            return;
        }

        console.log(`${colors.yellow}🔨 Executing build for: ${colors.bright}${name}${colors.reset}`);
        try {
            execSync('npm run build', {
                cwd: projectPath,
                stdio: 'inherit',
                env: silentEnv
            });
            cache[name] = currentHash;
            changed = true;
            console.log(`${colors.green}✔ ${name} build complete.${colors.reset}`);
        } catch (err) {
            console.error(`${colors.red}✘ Build failed for ${name}${colors.reset}`);
            process.exit(1);
        }
    });

    if (changed) {
        fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
    } else {
        console.log(`${colors.green}✨ All media components are up to date.${colors.reset}`);
    }
}

// --- Start Build Process ---

buildMediaComponents();

console.log(`\n${colors.bright}${colors.magenta}🚀 Bundling extension with esbuild...${colors.reset}`);

const external = ['vscode'];
build({
    entryPoints: ['./src/extension.ts'],
    sourcemap: true,
    bundle: true,
    platform: 'node',
    target: 'node20',
    external: external,
    outfile: './out/extension.js',
    format: 'cjs'
}).then(() => {
    console.log(`${colors.green}✔ Extension bundled successfully.${colors.reset}`);
    console.log(`${colors.cyan}📂 Copying resources...${colors.reset}`);
    cpSync('resources', join('out', 'resources'), { recursive: true });
    console.log(`${colors.bright}${colors.green}🎉 Build Finished!${colors.reset}\n`);
}).catch((err) => {
    console.error(`${colors.red}✘ esbuild failed${colors.reset}`, err);
    process.exit(1);
});