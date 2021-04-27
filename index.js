const imageFolder = "./images/";
const fs = require("fs");
const sharp = require("sharp");

fs.readdir(imageFolder, (err, images) => {
    images.forEach((image) => {
      imgPaths.push(`./images/${image}`);
    });
  
    imgPaths.forEach((image) => {
      sizes.forEach((size) => {
        sharp(image)
          .resize(size)
          .jpeg({quality: 100})
          .toFile(`${image}-${size}.jpg`)
          .then(info => { console.log(info) })
          .catch(err => { console.log(err) });
      });
    });
  });

const receivedArgv = process.argv.slice(2);
var sizes = [];
receivedArgv.forEach(arg => {
    sizes.push(parseInt(arg));
});
const imgPaths = [];

console.log(sizes);
