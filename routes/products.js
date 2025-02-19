const express = require('express');
const { createProduct, fetchAllProducts, fetchProductsById, UpdateProduct } = require('../controller/Product');
const { Product } = require('../model/Product');

const router = express.Router();
//  /products is already added in base path
router.post('/', createProduct)
      .get('/', fetchAllProducts)
      .get('/:id', fetchProductsById)
      .patch('/:id', UpdateProduct)

exports.router = router;