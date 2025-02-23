const getPathMapper = (folderName) => `<rootDir>/src/${folderName}/$1`

module.exports = {
  displayName: 'vue-template',
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'ts', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.ts$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!vuetify)'
  ],
  coverageReporters: ["text", "json-summary"],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': 'jest-css-modules',
    '^@assets/(.*)$': getPathMapper('assets'),
    '^@components/(.*)$': getPathMapper('components'),
    '^@composables/(.*)$': getPathMapper('composables'),
    '^@pages/(.*)$': getPathMapper('pages'),
    '^@plugins/(.*)$': getPathMapper('plugins'),
    '^@services/(.*)$': getPathMapper('services'),
    '^@utils/(.*)$': getPathMapper('utils')
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  }
};
