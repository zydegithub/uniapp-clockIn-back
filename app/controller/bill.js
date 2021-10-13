'use strict';

const Controller = require('egg').Controller;

class BillController extends Controller {

  async infoById() {
    const { ctx } = this;
    const result = await ctx.service.bill.infoById(ctx.params);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }

  async add() {
    const { ctx } = this;
    const result = await ctx.service.bill.add(ctx.request.body);
    await ctx.service.bill.deleteClockInAdvance(ctx.request.body);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }
}

module.exports = BillController;
