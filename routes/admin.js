const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/products', adminController.getProduct)

router.post('/edit-products', adminController.postEditProduct);

router.get('/edit-products/:productId', adminController.getEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
