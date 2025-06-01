const {
  executeCommand,
  checkFileExists,
  checkDirectoryHasContents
} = require('../utils');
const path = require('path');

(async () => {
  // verify if nginx is installed
  const nginxVersionCheck = await executeCommand('nginx -v');

  if (!nginxVersionCheck) {
    console.log('[BUILD LOCAL ERROR]: Please install nginx on your machine!');
    process.exit(1);
  }

  // get nginx dev config and dist directory
  const nginxLocalConfigFile = path.join(
    __dirname,
    '../../nginx.development.conf'
  );
  const distPath = path.join(__dirname, '../../dist');

  // check if exist/have contents
  const isNginxConfigExist = await checkFileExists(nginxLocalConfigFile);
  const isDistHaveContent = await checkDirectoryHasContents(distPath);

  if (!isNginxConfigExist) {
    console.log(
      '[BUILD LOCAL ERROR]: Your nginx.development.conf is missing! Please create.'
    );
    process.exit(1);
  }

  if (!isDistHaveContent) {
    const buildCommand = 'yarn build';
    const buildResult = await executeCommand(buildCommand);

    if (!buildResult) {
      console.log('[BUILD LOCAL ERROR]: Build failed. Please check your code!');
      process.exit(1);
    }
  }

  // run nginx in local server
  const runNginxCommand = `sudo nginx -c ${nginxLocalConfigFile}`;
  const runNginxResult = await executeCommand(runNginxCommand);

  if (!runNginxResult) {
    await executeCommand('sudo nginx -s stop');
    await executeCommand('sudo tail -f /var/log/nginx/error.log');
    process.exit(1);
  }
})();
