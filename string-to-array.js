'use strict'

function strToArray(str) {
    var tempInput = '';
    var input = [];
    var arr = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] != ',') {
            tempInput += str[i];
        } else {
            input.push(tempInput);
            tempInput = ''
        }
    }

    for(let i = 0; i < input.length; i++) {
        arr.push([]);
    }

    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++) {
            arr[i].push(input[i][j]);
        }
    }

    return arr;
}

console.log(strToArray('aqrst,ukaei,ffooo'));
console.log(strToArray('qwer,tyui,asdf,ghjk'));