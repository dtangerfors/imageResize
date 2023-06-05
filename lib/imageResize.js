"use strict";
const sharp = require("sharp");
const resize = require('./resize')

let size = new Object;

/**
 * Accepts the readline interface questions and all the images
 * from the image folder. It then runs resize functions after
 * checking the format. It currently to converts to jpg and png.
 * @param {*} settings Object with output map, size and quality from the readline interface.
 * @param {*} images Array containing objects with info about each image.
 */
const resizeImages = async (settings, images) => {
  images.forEach((image) => {
    settings.sizes.forEach(desiredSize => {
      sharp(image.filePath)
      .metadata()
      .then(({width, height, format}) => {
        height >= width ? size = {height: desiredSize} : size = {width: desiredSize}; // Check if height is bigger than width and set the size object
        
        if (format === "jpeg" || "jpg" || "webp") {
          resize.toJPG(settings, image, size)
        } else if (format === "png") {
          resize.toPNG(settings, image, size)
        } else {
          resize.toJPG(settings, image, size)
        }
      });
    })
    
  });
};

module.exports = resizeImages;
