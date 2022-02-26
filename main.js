const setupQuestions = require('./lib/setup').questions;
const collectImages = require('./lib/collectImages');
const resize = require('./lib/imageResize');

let settings = new Object, images = new Array;

const main = async () => {
   await setupQuestions().then(result => settings = result);
   await collectImages().then(result => images = result);
   await resize(settings, images).then(console.log('\n\nResizing… Check the output folder.\n'))
}

main();