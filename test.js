'use strict';

/* globals describe, it */

const expect = require('chai').expect;

const {update, isObject, keys} = require('./index');

const state = {
  user: {
    location: {
      city: 'Austin'
    }
  }
};

// update(state, {user: {location: {city: 'Austin'}}});

describe('The isObject function', () => {
  it('should return true if an argument is a object and false otherwise.', () => {
    const arrTest = isObject([1,2,3]);
    const objTest = isObject({foo: 'bar'});
    const strTest = isObject('lalalala');
    const numTest = isObject(123);
    const nullTest = isObject(null);
    const boolTest = isObject(true);
    const symbTest = isObject(Symbol('lala'));
    const undefTest = isObject(undefined);

    expect(arrTest).to.equal(false);
    expect(objTest).to.equal(true);
    expect(strTest).to.equal(false);
    expect(numTest).to.equal(false);
    expect(nullTest).to.equal(false);
    expect(boolTest).to.equal(false);
    expect(symbTest).to.equal(false);
    expect(undefTest).to.equal(false);
  });
});

