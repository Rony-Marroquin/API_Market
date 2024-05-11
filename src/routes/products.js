
const { Router } = require('express');
const router = Router();

const product_Controllers =require('../controllers/Products_Controllers');


//rutas

router.get('/api/list', product_Controllers.list);

router.get('/api/list/:id', product_Controllers.show);

router.post('/api/list/',product_Controllers.add)

router.put('/api/list/:id',product_Controllers.update)

router.delete('/api/list/:id',product_Controllers.delete)

router.delete('/api/list/', product_Controllers.deleteMany);

router.put('/api/replace/:id', product_Controllers.replace);

router.delete('/api/remove/:id', product_Controllers.removeById);

router.put('/api/update/:id', product_Controllers.updateById);





module.exports=router