'use strict';

// const Service = require('egg').Service;
const Service = require('../base/base_service');
class RecordService extends Service {
  // 查询
  async list(options) {
    return this._list(options)
  }

  async infoByKey({ key }) {
    return this._infoByKey({ key })
  }

  async add(options) {
    return this._add(options)
  }

}

module.exports = RecordService;
