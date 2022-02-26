const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let quality = new Number();
let sizes = new Array();

/**
 * Asks the user to input a string for quality.
 * @returns Adds the answer as Number to quality.
 */
const getQuality = () => {
  return new Promise((resolve, reject) => {
    rl.question("Choose quality, (0-100): ", (answer) => {
      quality = parseInt(answer);
      resolve();
    });
  });
};

/**
 * Asks the user to add strings of wished sizes that is used
 * to return images in chosen sizes.
 * @returns Splits the received arguments in to Numbers in the
 * sizes array.
 */
const getSizes = () => {
  return new Promise((resolve, reject) => {
    rl.question(
      "What sizes do you wish to resize to? (Separated with blank space if multiple): ",
      (answer) => {
        sizes = answer.split(" ").map(Number);
        resolve();
      }
    );
  });
};

const main = async () => {
  await getQuality();
  await getSizes();
  rl.close();

  return { sizes: sizes, quality: quality };
};

module.exports = {
  questions: main,
};
