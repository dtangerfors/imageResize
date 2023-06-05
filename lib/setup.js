const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let outputMap = new String();
let quality = new Number();
let sizes = new Array();

/**
 * Asks the user to name a folder to save in.
 * @returns Adds the answer as String to outputMap.
 */
const getOutputMap = () => {
  return new Promise((resolve, reject) => {
    rl.question("Döp mappen som bilderna ska sparas i: ", (answer) => {
      outputMap = answer;
      resolve();
    });
  });
};
/**
 * Asks the user to input a string for quality.
 * @returns Adds the answer as Number to quality.
 */
const getQuality = () => {
  return new Promise((resolve, reject) => {
    rl.question("Välj kvalitet på bilderna, (0-100): ", (answer) => {
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
      "Till vilken storlek vill du skala om bilderna? (Separera med komma om du önskar flera storlekar.): ",
      (answer) => {
        sizes = answer.split(" ").map(Number);
        resolve();
      }
    );
  });
};

const main = async () => {
  await getOutputMap();
  await getQuality();
  await getSizes();
  rl.close();

  return { sizes: sizes, quality: quality, outputMap: outputMap };
};

module.exports = {
  questions: main,
};
