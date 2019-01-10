'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = '哈喽，我是egg-graphql项目例子'
  }
}

module.exports = HomeController
