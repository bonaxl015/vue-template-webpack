const getPathMapper = (folderName) => `<rootDir>/src/${folderName}/$1`

module.exports = {
  collectCoverage: true,
  displayName: 'vue-template',
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'mjs', 'ts', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.ts$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  },
  modulePathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!vuetify)'
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
    '^@utils/(.*)$': getPathMapper('utils'),
    '^@vue/test-utils': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js',
    '^vuetify$': '<rootDir>/node_modules/vuetify/dist/vuetify.js'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  verbose: true
};
