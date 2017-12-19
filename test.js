const Tools = require('./tools');

const {
  duplicateRemoval, deepCloneObj,
  combineArrysToOne, getIntegerNum,
  asyncFun
 } = Tools;


var result = duplicateRemoval();

console.log(result);

var obj1 = [{ sex: 'male', age: 29 }];
var obj2 = deepCloneObj(obj1)[0];
obj2.age = 30;
obj2.sex = 'female';

console.log(obj1, obj2);

var arr3 = combineArrysToOne();

console.log(arr3);

var intNum = getIntegerNum();

console.log(intNum);

asyncFun()
  .then(r => console.log('r=', r))
  .then(r => console.log('r=', r))
  .then(r => console.log('r=', r))
  .then(r => console.log('r=', r))
  .then(r => console.log('r=', r))
  .then(r => console.log('r=', r));