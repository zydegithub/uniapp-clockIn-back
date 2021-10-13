'use strict';

const Service = require('egg').Service;
const moment = require('moment');
class AdvanceService extends Service {
  async infoById(options) {
    const { id } = options;
    const result = await this.app.mysql.query(`select * ,'bill' as type from bill UNION select * ,'advance' as type from advance where workerId = ${id} ORDER BY date`);
    return result;
  }

  async add(options) {
    options.date = moment().format('YYYY-MM-DD HH:mm:ss');
    const result = await this.app.mysql.insert('advance', options);
    return result.affectedRows;
  }
}

module.exports = AdvanceService;
