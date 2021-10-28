'use strict';

// const Controller = require('egg').Controller;
const Controller = require('../base/base_controller');

class RecordController extends Controller {
  async list() {
    this._list()
  }

  async infoByKey() {
    this._infoByKey()
  }

  async add() {
    this._add()
  }
}

module.exports = RecordController;
