'use strict';

const express = require('express');

const Products = require('../models/categories.js');

const products = new Products();
const router = express.Router();

router.get('/products/:id', getProduct);
router.post('/products', addProduct);

function getProduct(request,response,next) {
  // expects an array with one object in it
  products.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}
  
function addProduct(request,response,next) {
  // expects the record that was just added to the database
  products.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;