// 数组去重
exports.duplicateRemoval = (array = []) => {
  return [...new Set(array)];
}

//对象的深克隆
exports.deepCloneObj = (obj) => {
  if (!obj && typeof obj !== 'object') {
    return;
  }
  var newObj = obj.constructor === Array ? [] : {};
  for (var key in obj) {
    if (obj[key]) {
      if (obj[key] && typeof obj[key] === 'object') {
        newObj[key] = obj[key].constructor === Array ? [] : {};
        //递归
        newObj[key] = exports.deepCloneObj(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
}

//合并数组
exports.combineArrysToOne = (arr1, arr2) => {
  if (arr1 && arr2) {
    arr1.push.apply(arr1, arr2);
    return arr1;
  } else {
    return arr1 || arr2 || [];
  }
}

//取整数
exports.getIntegerNum = (num = 0) => {
  return ~~num;
}

exports.asyncFun = async () => {
  let a = 1;
  await a++;
  console.log(a);
  await a++;
  console.log(a);
  await a++;
  console.log(a);
  await a++;
  console.log(a);
  return a;
}