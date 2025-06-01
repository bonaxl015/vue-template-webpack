const { spawn } = require('child_process');
const fs = require('fs');

function executeCommand(command) {
  const [cmd, ...args] = command.split(' ');

  return new Promise((resolve, reject) => {
    const process = spawn(cmd, args, { stdio: 'inherit' });

    process.on('close', (code) => {
      code === 0
        ? resolve(true)
        : reject(new Error(`${command} failed with code ${code}`));
    });
  });
}

async function checkFileExists(filePath) {
  try {
    await fs.promises.access(filePath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`The file at '${filePath}' does not exist.`);
    } else {
      console.error(`An error occurred: ${error.message}`);
    }
    return false;
  }
}

async function checkDirectoryHasContents(dirPath) {
  try {
    const files = await fs.promises.readdir(dirPath);
    return files.length > 0;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`The directory "${dirPath}" does not exist.`);
    } else {
      console.error(`Error checking directory "${dirPath}":`, error);
    }
    return false;
  }
}

module.exports = {
  executeCommand,
  checkFileExists,
  checkDirectoryHasContents
};
