'use strict';

const Service = require('egg').Service;
const moment = require('moment');
class BillService extends Service {
  // 查询
  async list(options) {
    const { limit = 100, offset = 0 } = options;
    const result = await this.app.mysql.select('bill', {
      limit: Number(limit), // 查询条数
      offset: Number(offset), // 数据偏移量（分页查询使用）
    });
    return result;
  }

  async infoById({ id }) {
    const result = await this.app.mysql.query(`select * ,(SELECT COUNT(*) from clockIn WHERE workerId = ${id}) as clockInNum, (SELECT SUM(money) from advance WHERE workerId = ${id}) as advanceMoney, (SELECT MAX(date) from clockIn WHERE workerId = ${id}) as maxDate, (SELECT MIN(date) from clockIn WHERE workerId = ${id}) as minDate from worker WHERE id = ${id}`);
    return result;
  }

  async add(options) {
    options.date = moment().format('YYYY-MM-DD HH:mm:ss');
    const result = await this.app.mysql.insert('bill', options);
    return result.affectedRows;
  }

  async deleteClockInAdvance({ workerId }) {
    await this.app.mysql.query(`DELETE clockIn,advance from clockIn LEFT JOIN advance ON clockIn.workerId=advance.workerId WHERE clockIn.workerId=${workerId}`);
  }

}

module.exports = BillService;
