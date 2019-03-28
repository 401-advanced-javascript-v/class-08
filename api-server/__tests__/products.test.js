'use strict';
const supergoose = require('../__tests__/supergoose.js');
const Products = require('../src/models/products.js');

const products = new Products();

beforeAll(supergoose.startDB);
beforeAll(supergoose.stopDB);

describe('Categories', () => {

  it('post() -- can create a product', () => {
    let product = { name: 'Apple', categories : 'Fruits'};
    return products.post(product)
      .then(record => {
        Object.keys(products).forEach(key =>{
          expect(record[0][key]).toEqual(product[key]);
        });
      })
      .catch(err => console.error('ERR', err) );
  });

  it('can get() products', () => {
    let product = {name:'carrot', categories : 'Vegetables'};
    return products.post(product)
      .then(record => {
        //   console.log(record.id);
        return products.get(record.id)
          .then(productObj => {
            //   console.log(cateObj);
            Object.keys(productObj).forEach(key =>{
              expect(productObj[0][key]).toEqual(product[key]);
            });
          });
      });
  });

  xit('can update(id) a product', () => {
    let category = {name:'Meat'};
    return products.post(category)
      .then(record => {
        console.log(record.id);
        return products.get(record.id)
          .then(cateObj => {
            console.log(cateObj);
            Object.keys(category).forEach(key =>{
              expect(cateObj[0][key]).toEqual(category[key]);
            });
          });
      });
  });

  


});