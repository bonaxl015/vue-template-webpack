module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
  testEnvironment: 'jsdom'
};
