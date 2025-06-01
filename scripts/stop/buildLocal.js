const { executeCommand } = require('../utils');

(async () => {
  try {
    const stopCommand = 'sudo nginx -s stop';
    const stopResult = await executeCommand(stopCommand);

    if (stopResult) {
      await executeCommand('curl http://localhost:80');
    }
  } catch (error) {
    if (error.message.includes('curl http://localhost:80 failed')) {
      console.log('Nginx server is now stopped.');
    }
  }
})();
