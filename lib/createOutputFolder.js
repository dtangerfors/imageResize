const fs = require("fs");

function createFolder(settings) {
  const folderMap = `./output/${settings.outputMap}`;

  try {
    if (!fs.existsSync(folderMap)) {
      fs.mkdirSync(folderMap);
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = createFolder;
