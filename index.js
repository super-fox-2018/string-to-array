function conversion(str) {
  let newArr = [];
  let strArr = str.split(',');
  for (var i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].split('');
    // newArr.push([]);
    // for (var j = 0; j < strArr[i].length; j++) {
    //   newArr[i].push(strArr[i][j]);
    // }
  }
  return strArr;
}

console.log(conversion('aaaaa,bbbbb,ccccc'));
