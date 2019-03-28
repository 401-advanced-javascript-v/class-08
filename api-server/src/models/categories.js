'use strict';

const schema = require('./categories-schema.js');

class Categories {

  constructor() {
  }

  get(id) {
    let queryObject = id ? {id} : {};
    return schema.find(queryObject);
  }
  
  post(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

  put(id, record) {
    return schema.findByIdAndUpdate(id, record, {new:true});
  }

  delete(id) {
    return schema.findByIdAndDelete(id);
  }

}

module.exports = Categories;
