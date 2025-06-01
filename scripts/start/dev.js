const { executeCommand } = require('../utils');

(async () => {
  const devCommand = 'webpack serve --env development';
  const commandResult = await executeCommand(devCommand);

  if (!commandResult) {
    process.exit(1);
  }
})();
