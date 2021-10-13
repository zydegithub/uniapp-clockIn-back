'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
class WorkerController extends Controller {
  async list() {
    const { ctx } = this;
    const result = await ctx.service.worker.list(ctx.query);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }

  async infoById() {
    const { ctx } = this;
    const result = await ctx.service.worker.infoById(ctx.params);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }

  async add() {
    const { ctx } = this;
    if (ctx.request.files) {
      const file = ctx.request.files[0]; // file包含了文件名，文件类型，大小，路径等信息，可以自己打印下看看
      const fileBuffer = fs.readFileSync(file.filepath); // files[0]表示获取第一个文件，若前端上传多个文件则可以遍历这个数组对象
      // 将文件存到指定位置
      if (fs.existsSync(path.join('./', 'app/public/' + ctx.request.files[0].filename))) {
        fs.unlinkSync(path.join('./', 'app/public/' + ctx.request.files[0].filename));
      }
      fs.writeFileSync(path.join('./', 'app/public/' + ctx.request.files[0].filename), fileBuffer);
      ctx.request.body.imgUrl = 'public/' + ctx.request.files[0].filename;
    }
    const result = await ctx.service.worker.add(ctx.request.body);
    ctx.body = {
      code: 200,
      data: result,
    };
    ctx.status = 200;
  }
}

module.exports = WorkerController;
