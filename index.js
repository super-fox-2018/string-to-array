function stringToArray(str) {
  const result = [];
  let index = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (i === 0) result.push([]);

    if (str[i] === ',') {
      result.push([]);
      index += 1;
    } else result[index].push(str[i]);
  }

  return result;
}

function printPerRow(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
}

printPerRow(stringToArray('aqrst,ukaei,ffooo'));
printPerRow(stringToArray('qwer,tyui,asdf,ghjk'));