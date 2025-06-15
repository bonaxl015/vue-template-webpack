const fs = require('fs');
const cypress = require('cypress');
const CypressFailFastPlugin = require('cypress-fail-fast/plugin');

async function setupNodeEvents(on, config) {
  CypressFailFastPlugin(on, config);

  on('after:spec', (_spec, results) => {
    if (results?.video) {
      const failures = results.tests.some((test) =>
        test.attempts.some((attempt) => attempt.state === 'failed')
      );

      if (!failures) {
        fs.unlinkSync(results.video);
      }
    }
  });

  return config;
}

module.exports = cypress.defineConfig({
  e2e: {
    baseUrl: 'http://localhost:7777',
    setupNodeEvents,
    specPattern: ['**/*.cy.js', '**/*.cy.ts']
  },
  retries: {
    runMode: 1
  },
  env: {
    url: 'http://localhost:7777',
    FAIL_FAST_STRATEGY: 'spec',
    FAIL_FAST_ENABLED: true,
    FAIL_FAST_BAIL: 1
  },
  defaultCommandTimeout: 5000,
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  videosFolder: 'cypress/videos'
});
