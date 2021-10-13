'use strict';

const Service = require('egg').Service;
const moment = require('moment');
class ClockInService extends Service {
  // 查询
  async list(options) {
    const { limit = 100, offset = 0 } = options;
    const result = await this.app.mysql.select('clockIn', {
      limit: Number(limit), // 查询条数
      offset: Number(offset), // 数据偏移量（分页查询使用）
    });
    return result;
  }

  async infoById(options) {
    const { id } = options;
    const result = await this.app.mysql.select('clockIn', {
      where: {
        workerId: id,
      },
    });
    return result;
  }

  async add(options) {
    const { workerIdArr, date, time } = options;
    for (let index = 0; index < workerIdArr.length; index++) {
      const params = {
        workerId: Number(workerIdArr[index]),
        date: moment().format('YYYY-MM-DD'),
        time: moment().format('HH:mm:ss'),
      };
      if (date) {
        params.date = date;
        params.time = time;
      }
      await this.app.mysql.insert('clockIn', params);
    }
    return workerIdArr.length;
  }
}

module.exports = ClockInService;
