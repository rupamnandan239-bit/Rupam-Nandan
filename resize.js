const sharp = require('sharp');
const fs = require('fs');

async function processImages() {
  const input = 'images/logo.png';
  if (!fs.existsSync(input)) {
    console.error("Input missing");
    return;
  }
  
  await sharp(input).resize(256, 256, { fit: 'cover' }).toFile('images/logo-256.png');
  await sharp(input).resize(64, 64, { fit: 'cover' }).toFile('images/favicon.png');
  console.log('done resizing without crop');
}
processImages();
