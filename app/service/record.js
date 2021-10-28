'use strict';

const Service = require('egg').Service;
const moment = require('moment');
class RecordService extends Service {
  // 查询
  async list(options) {
    const { limit = 10, offset = 0 } = options;
    const result = await this.app.mysql.select('record', {
      limit: Number(limit), // 查询条数
      offset: Number(offset), // 数据偏移量（分页查询使用）
    });
    return result;
  }

  // async infoById({ id }) {
  //   const result = await this.app.mysql.query(`select * ,(SELECT COUNT(*) from clockIn WHERE workerId = ${id}) as clockInNum, (SELECT SUM(money) from advance WHERE workerId = ${id}) as advanceMoney, (SELECT MAX(date) from clockIn WHERE workerId = ${id}) as maxDate, (SELECT MIN(date) from clockIn WHERE workerId = ${id}) as minDate from worker WHERE id = ${id}`);
  //   return result;
  // }

  async add(options) {
    options.date = moment().format('YYYY-MM-DD HH:mm:ss');
    const result = await this.app.mysql.insert('record', options);
    return result.affectedRows;
  }

}

module.exports = RecordService;
