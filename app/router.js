'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/worker', controller.worker.list);
  router.get('/worker/:id', controller.worker.infoById);
  router.post('/worker', controller.worker.add);
  router.get('/clockIn/:id', controller.clockIn.infoById);
  router.post('/clockIn', controller.clockIn.add);
  router.get('/advance/:id', controller.advance.infoById);
  router.post('/advance', controller.advance.add);
  router.get('/bill/:id', controller.bill.infoById);
  router.post('/bill', controller.bill.add);
};
