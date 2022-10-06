const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin-controller');


const router = express.Router();

// /admin/add-product => GET
router.get('/admin-add-product', adminController.getAddProduct);

// /admin/admin-product-list
router.get('/admin-product-list', adminController.getProducts);

// /admin/add-product => POST
router.post('/admin-add-product', adminController.postAddProduct);


module.exports = router;
