const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Spacing
    content = content.replace(/(?<!md:)py-32/g, 'py-16 md:py-32');
    content = content.replace(/(?<!md:)gap-20/g, 'gap-12 md:gap-20');
    content = content.replace(/(?<!md:)gap-24/g, 'gap-12 md:gap-24');
    content = content.replace(/(?<!md:)mt-24/g, 'mt-12 md:mt-24');
    content = content.replace(/(?<!md:)mt-20/g, 'mt-12 md:mt-20');
    
    // Fonts
    content = content.replace(/text-6xl md:text-7xl lg:text-\[5\.5rem\]/g, 'text-5xl md:text-7xl lg:text-[5.5rem]');
    content = content.replace(/text-5xl md:text-6xl lg:text-8xl/g, 'text-4xl md:text-6xl lg:text-8xl');
    content = content.replace(/text-6xl md:text-7xl lg:text-9xl/g, 'text-5xl md:text-7xl lg:text-9xl');
    content = content.replace(/text-6xl md:text-8xl/g, 'text-4xl md:text-6xl lg:text-8xl');
    content = content.replace(/text-5xl md:text-7xl/g, 'text-4xl md:text-6xl lg:text-7xl');

    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  }
});
