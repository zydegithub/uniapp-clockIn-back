'use strict';

const Controller = require('egg').Controller;

class RecordController extends Controller {
  async list() {
    const { ctx } = this;
    const result = await ctx.service.record.list(ctx.query);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }

  async infoById() {
    const { ctx } = this;
    const result = await ctx.service.record.infoById(ctx.params);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }

  async add() {
    const { ctx } = this;
    const result = await ctx.service.record.add(ctx.request.body);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }
}

module.exports = RecordController;
