// File: PCV.js = Package_Current_Version.js
// Description: This script checks the current installed versions of dependencies in package.json
// and compares them with the latest available versions in the npm registry.
// Author: Furiozi.

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ASCII Art Logo
console.log(`
\n
            ██████╗  █████╗ ██╗   ██╗         
            ██╔══██╗██╔══██╗██║░░░██║         
            ██████╔╝██║░░╚═╝╚██╗░██╔╝         
            ██╔═══╝░██║░░██╗░╚████╔╝░         
            ██║░░░░░╚█████╔╝░░╚██╔╝░░         
            ╚═╝      ╚════╝    ╚═╝            
\n              🔧 Created by: Fuze.
\n                      v1.0b.
\n———————————————————————————————————————————————————\n`);

// Path to package.json
const packageJsonPath = path.resolve(process.cwd(), '../package.json');

// Checking if package.json exists
if (!fs.existsSync(packageJsonPath)) {
  console.error(`❌ Error: package.json not found or check your file path!\n\nYour current path: ${packageJsonPath}`);
  process.exit(1);
}

// Loading dependencies...
const packageJson = require(packageJsonPath);
const dependencies = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies
};

if (Object.keys(dependencies).length === 0) {
  console.log(`🕳  There are no dependencies in the project.\n\n❔ Add new dependencies or select another package.json!\n\n `);
  process.exit(0);
}

try {
  console.log(`⌛ Checking the current versions of dependencies...\n`);
  
  Object.keys(dependencies).forEach((dep) => {
    const installedVersion = dependencies[dep];
    const latestVersion = execSync(`npm view ${dep} version`).toString().trim();
    console.log(`■ ——— (${dep}):\n        Current version - ${installedVersion} => ${latestVersion}@latest\n`);
  });

  console.log(`All dependencies checked! ✔`);
  console.log(`\n———————————————————————————————————————————————————\n`);

} catch (error) {
  console.error(`❌ Error: ${error.message}`);
  process.exit(1);
}
