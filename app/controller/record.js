'use strict';

// const Controller = require('egg').Controller;
const Controller = require('../base/base_controller');

class RecordController extends Controller {
  async list() {
    await this._list()
  }

  async infoByKey() {
    await this._infoByKey()
  }

  async add() {
    await this._add()
  }
}

module.exports = RecordController;
