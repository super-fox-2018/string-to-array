function strToArr(str) {
  const word = str.split(',');
  const arrOfWords = [];
    for (let i = 0; i < word.length; i++) {
      arrOfWords.push(word[i].split(''));
    }
  return arrOfWords;
}

//Test Cases
console.log(strToArr('aqrst,ukaei,ffooo'))

console.log(strToArr('qwer,tyui,asdf,ghjk'))

console.log(strToArr('qwer1,asdf,zxc'))
