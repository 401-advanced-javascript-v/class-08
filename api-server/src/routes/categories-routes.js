
'use strict';

const express = require('express');

const Categories = require('../models/categories.js');

const categories = new Categories();
const router = express.Router();

router.get('/categories/:id', getCategory);
router.post('/categories', addCategory);


function getCategory(request,response,next) {
  // expects an array with the one matching record from the model
  categories.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function addCategory(request,response,next) {
  // expects the record that was just added to the database
  categories.post(request.body)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

module.exports = router;