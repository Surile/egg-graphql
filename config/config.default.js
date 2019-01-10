'use strict'

module.exports = appInfo => {
  const config = {
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'ZLy19980320..',
      database: 'test'
    },
    security: {
      csrf: {
        ignore: () => true
      }
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    },
    proxyworker: {
      port: 10086
    },
    middleware: ['graphql']
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546846389359_709'

  // add your config here

  return config
}
