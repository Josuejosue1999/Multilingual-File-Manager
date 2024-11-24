const fs = require('fs');
const path = require('path');

const directories = [
  'src/controllers',
  'src/middlewares',
  'src/models',
  'src/routes',
  'src/services',
  'src/config',
  'src/workers',
  'src/utils',
  'tests',
];

const files = ['.env', 'app.js', 'package.json'];

directories.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  fs.mkdirSync(dirPath, { recursive: true });
});

files.forEach((file) => {
  const filePath = path.join(__dirname, file);
  fs.writeFileSync(filePath, '');
});

console.log('Project structure created successfully!');