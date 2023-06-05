const setupQuestions = require('./lib/setup').questions;
const collectImages = require('./lib/collectImages');
const resize = require('./lib/imageResize');
const createFolder = require('./lib/createOutputFolder');

let settings = new Object, images = new Array;

const main = async () => {
   await setupQuestions().then(result => settings = result);
   await collectImages().then(result => images = result);
   createFolder(settings);
   await resize(settings, images).then(console.log('\n\nSkalar om… Kolla destinationsmappen.\n'))
}

main();