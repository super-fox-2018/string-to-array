function stringToArray(dataArray) {
  var splitDataArray = dataArray.split('')
  var tempArray = []
  var resultArray = []
  for (var i = 0; i < splitDataArray.length; i++) {
    tempArray.push(splitDataArray[i])
    if (splitDataArray[i+1] === ',') {
      i+=1
      resultArray.push(tempArray)
      tempArray = []
    }
  }
  resultArray.push(tempArray)
  return resultArray;
}


console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,ghjk'));
