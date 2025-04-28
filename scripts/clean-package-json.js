import {
  pathJoin,
  readFileToJsonSync,
  getDirectoryBy,
  writeJsonFile,
} from 'a-node-tools';

let packageJson = readFileToJsonSync('./package.json');

['scripts', 'devDependencies', 'lint-staged', 'private'].forEach(
  key => delete packageJson[key],
);

packageJson = {
  ...packageJson,
  author: {
    name: '🥜',
    email: 'earthnut.dev@outlook.com',
    url: 'https://earthnut.dev',
  },
  files: ['src', 'bin.mjs'],
  keywords: ['pjj'],
  repository: {
    type: 'git',
    url: 'git+https://github.com/earthnutDev/pjj.git',
  },
  homepage: 'https://earthnut.dev/pjj',
  bugs: {
    url: 'https://github.com/earthnutDev/pjj/issues',
    email: 'earthnut.dev@outlook.com',
  },
  publishConfig: {
    access: 'public',
    registry: 'https://registry.npmjs.org/',
  },
  bin: {
    pjj: 'bin.mjs',
  },
};

// 写入 dist/package.json
{
  const distPath = getDirectoryBy('dist', 'directory');

  const distPackagePath = pathJoin(distPath, './dist/package.json');

  writeJsonFile(distPackagePath, packageJson);
}

// 写入 dist/bin.js
// {
//   await runOtherCode({ code: 'mkdir -p ./dist' });
//   writeFileSync(
//     'dist/bin.js',
//     `#!/usr/bin/env node

// import './index.mjs';
//   `,
//   );
// }
