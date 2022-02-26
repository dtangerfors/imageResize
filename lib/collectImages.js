const fs = require("fs");
const path = require("path");
const imageFolder = "./images";
let images = new Array();

/**
 * Read directory and its content.
 * @returns Returns an array with objects containing the
 * files path, name and extension.
 */
const collectImages = async () => {
  fs.readdirSync(imageFolder)
  .filter((file) => !/(^|\/)\.[^\/\.]/g.test(file)) // Filter out hidden files
  .forEach((file) => {
    images.push({
      filePath: `./images/${file}`,
      fileName: path.parse(file).name,
      fileExt: path.parse(file).ext, // Get its file extension
    });
  });

  return images
  
};

module.exports = collectImages;
