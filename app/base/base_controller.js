'use strict';
const CoreController = require('./core_controller');

class BaseController extends CoreController {
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
    this.success(result)
  }
}

module.exports = BaseController;