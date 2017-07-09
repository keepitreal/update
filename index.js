/**

{
  user: {
    location: {
      city: 'Austin'
    }
  }
}

 */

function update(from, to) {
  

  return Object.keys(to).reduce((prev, curr) => {
    // const keys
    // return Object.assign({}, to[])
  }, {});
}

function keys(obj, arr) {
  if (!isObject(obj)) {
    return arr.concat([obj]);
  }

  const objKeys = Object.keys(obj);

  if (objKeys.length !== 1) {
    throw new Error('Objects can only have a single child property.')
  }

  Array.prototype.push.apply(arr, objKeys);

  return keys(obj[objKeys.pop()], arr);
}

function isObject(obj) {
  return (
    obj === Object(obj) &&
    Object.prototype.toString.call(obj) !== '[object Array]'
  );
}

Object.assign(exports, {
  update,
  keys,
  isObject,
});
