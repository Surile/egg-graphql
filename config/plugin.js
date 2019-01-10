'use strict'

// had enabled by egg
// exports.static = true;

exports.validate = {
  enable: true,
  package: 'egg-validate'
}

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}

exports.graphql = {
  enable: true,
  package: 'egg-graphql'
}

exports.cors = {
  enable: true,
  package: 'egg-cors'
}
