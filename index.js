function stringToArray (str) {
  let arrayOfStrings = str.split(",");
  let display = [];
  //console.log(arrayOfStrings)

  for (let i = 0; i < arrayOfStrings.length; i++) {
    let output = [];
    let splitString = arrayOfStrings[i].split('')

    for (let j = 0; j < arrayOfStrings[i].length; j++) {
      output.push(splitString[j])
    }
    display.push(output);
  }

  return display;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
