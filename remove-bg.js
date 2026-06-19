const Jimp = require('jimp');

async function main() {
  try {
    console.log("Loading image...");
    const image = await Jimp.read('public/image.png');
    
    console.log("Processing pixels...");
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const brightness = Math.max(r, g, b);
      
      // If it's very dark, remove it
      if (brightness < 25) {
        this.bitmap.data[idx + 3] = 0;
      } else if (brightness < 60) {
        // Soft edge for anti-aliasing
        this.bitmap.data[idx + 3] = Math.min(255, (brightness - 25) * 7);
      }
    });

    console.log("Saving transparent image...");
    await image.writeAsync('public/logo-transparent.png');
    console.log('Background removed successfully!');
  } catch(e) {
    console.error("Error processing image:", e);
  }
}

main();
