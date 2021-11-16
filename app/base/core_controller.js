'use strict';

const Controller = require('egg').Controller;

class CoreController extends Controller {

  success(res) {
    this.ctx.body = {
      code: 200,
      data: res,
    };
  }
}

module.exports = CoreController;
