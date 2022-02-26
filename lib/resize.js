const sharp = require("sharp");
const slugify = require('./slugify')

function toJPG(settings, image, size) {

   const fileName = `${slugify(image.fileName)}-${size[Object.keys(size)[0]]}.jpg`;

   sharp(image.filePath)
   .resize(size)
   .jpeg({ quality: settings.quality })
   .toFile(`./output/${fileName}`)
   .then((info) => {
     console.log(`Scaled ${image.fileName} successfully to: ${fileName}`);
   })
   .catch((err) => {
     console.log(err);
   });
}

function toPNG(settings, image, size) {
   
   const fileName = `${slugify(image.fileName)}-${size[Object.keys(size)[0]]}.png`;

   sharp(image.filePath)
   .resize(size)
   .png({ quality: settings.quality })
   .toFile(`./output/${fileName}`)
   .then((info) => {
      console.log(`Scaled ${image.fileName} successfully to: ${fileName}`);
   })
   .catch((err) => {
     console.log(err);
   });
}

module.exports = {
   toJPG: toJPG,
   toPNG: toPNG,
 };