function arrString(str){
  var arr = [];
  str = str.split(",");



  for(var i = 0; i < str.length; i++){
      arr.push(str[i].split(""));
  }
  return arr;
}

console.log(arrString("aqrst,ukaei,ffooo"));
console.log(arrString("qwer,tyui,asdf,ghjk"));
