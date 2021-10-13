'use strict';

const Service = require('egg').Service;

class WorkerService extends Service {
  // 查询
  async list(options) {
    const { limit = 100, offset = 0 } = options;
    const result = await this.app.mysql.select('worker', {
      limit: Number(limit), // 查询条数
      offset: Number(offset), // 数据偏移量（分页查询使用）
    });
    return result;
  }

  async infoById(options) {
    const { id } = options;
    const result = await this.app.mysql.select('worker', {
      where: {
        id,
      },
    });
    return result;
  }

  async add(options) {
    const result = await this.app.mysql.insert('worker', options);
    return result.affectedRows;
  }
}

module.exports = WorkerService;
