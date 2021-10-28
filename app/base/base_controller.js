'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  get name() {
    return this.pathName.split('.')[1];
  }

  get curService() {
    const { service } = this;
    return service[this.name];
  }

  async _list() {
    const { ctx } = this;
    const result = await this.curService.list(ctx.query);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }

  async _infoByKey() {
    const { ctx } = this;
    const result = await this.curService.infoByKey(ctx.params);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }

  async _add() {
    const { ctx } = this;
    const result = await this.curService.add(ctx.request.body);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }
}

module.exports = BaseController;