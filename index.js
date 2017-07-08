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
  const keys = Object.keys(obj);

  if (Object.keys(obj).length) {
    return arr.concat([obj]);
  }

  return (obj[arr.pop()], arr.concat(keys));
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
