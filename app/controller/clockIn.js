'use strict';

const Controller = require('egg').Controller;

class ClockInController extends Controller {
  async list() {
    const { ctx } = this;
    const result = await ctx.service.clockIn.list(ctx.query);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }

  async infoById() {
    const { ctx } = this;
    const result = await ctx.service.clockIn.infoById(ctx.params);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }

  async add() {
    const { ctx } = this;
    const result = await ctx.service.clockIn.add(ctx.request.body);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }
}

module.exports = ClockInController;
