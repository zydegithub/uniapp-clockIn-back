'use strict';

const Controller = require('egg').Controller;

class AdvanceController extends Controller {
  async infoById() {
    const { ctx } = this;
    const result = await ctx.service.advance.infoById(ctx.params);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }

  async add() {
    const { ctx } = this;
    const result = await ctx.service.advance.add(ctx.request.body);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }
}

module.exports = AdvanceController;
