/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';
const supergoose = require('../__tests__/supergoose.js');
const CategoriesDatabase = require('../categories.js');

const categories = new CategoriesDatabase();

beforeAll(supergoose.startDB);
beforeAll(supergoose.stopDB);

describe('Categories', () => {

  it('post() -- can create a category', () => {
    let category = { name: 'Fruits'};
    return categories.post(category)
      .then(record => {
        Object.keys(categories).forEach(key =>{
          expect(record[0][key]).toEqual(category[key]);
        });
      })
      .catch(err => console.error('ERR', err) );
  });

  it('can get() a category', () => {
    let category = {name:'Vegetables'};
    return categories.post(category)
      .then(record => {
        //   console.log(record.id);
        return categories.get(record.id)
          .then(cateObj => {
            //   console.log(cateObj);
            Object.keys(category).forEach(key =>{
              expect(cateObj[0][key]).toEqual(category[key]);
            });
          });
      });
  });

  xit('can update(id) a category', () => {
    let category = {name:'Meat'};
    return categories.post(category)
      .then(record => {
        console.log(record.id);
        return categories.get(record.id)
          .then(cateObj => {
            console.log(cateObj);
            Object.keys(category).forEach(key =>{
              expect(cateObj[0][key]).toEqual(category[key]);
            });
          });
      });
  });

  


});
