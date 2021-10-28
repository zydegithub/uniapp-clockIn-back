'use strict';

const Service = require('egg').Service;
const moment = require('moment');
class BaseService extends Service {
  get name() {
    return this.pathName.split('.')[1];
  }

  async _list(options) {
    const { limit = 10, offset = 0 } = options;
    const result = await this.app.mysql.select(this.name, {
      limit: Number(limit), // 查询条数
      offset: Number(offset), // 数据偏移量（分页查询使用）
    });
    return result;
  }

  async _infoByKey({ key }) {
    const result = await this.app.mysql.query(`select * from ${this.name} where message like '%${key}%'`);
    return result;
  }

  async _add(options) {
    options.date = moment().format('YYYY-MM-DD HH:mm:ss');
    const result = await this.app.mysql.insert(this.name, options);
    return result.affectedRows;
  }

}

module.exports = BaseService;