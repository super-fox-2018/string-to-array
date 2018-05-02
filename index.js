function stringToArray(string) {
  var array = [];
  var arr = string.split(',');
  for (var i = 0; i < arr.length ; i++) {
    array.push(arr[i].split(''));
  }
  return array;
}
console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
