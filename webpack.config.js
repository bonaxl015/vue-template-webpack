const webpackClient = require('./configs/webpack/index')

const devOptions = {
  env: {},
  title: 'Vue Template',
  port: 7777
}

const prodOptions = {
  env: {},
  title: 'Vue Template'
}

module.exports = (env) => {
  if (env.development) {
    return webpackClient.createDevelopmentConfig(devOptions)
  }

  return webpackClient.createProductionConfig(prodOptions)
}
