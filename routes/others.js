const express=require('express');

const othersCtl=require('../controllers/othersctl')

const routes=express.Router();

routes.get('/add_others',othersCtl.add_others)

routes.post('/othersInsertData',othersCtl.othersInsertData)

routes.get('/view_others',othersCtl.view_others)

routes.get('/deleteOthersRecord/:id',othersCtl.deleteOthersRecord)

routes.get('/deactive/:id',othersCtl.deactive);

routes.get('/active/:id',othersCtl.active);


module.exports= routes