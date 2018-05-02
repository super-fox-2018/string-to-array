function stringToArr(input) {
    let arrCol = [];
    let arrRow = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ',') {
            arrCol.push(arrRow);
            arrRow = [];
        } else {
            arrRow.push(input[i]);
        }
    }
    arrCol.push(arrRow);
    return arrCol;
}

console.log(stringToArr('aqrst,ukaei,ffooo'));
console.log(stringToArr('qwer,tyui,asdf,ghjk'));