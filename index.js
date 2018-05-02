'use strict'
var stringToArray = input => {
    var output = [[]]
    var index = 0
    for(var i = 0; i < input.length; i++){
        if(input.charAt(i)==","){
            index++
            output[index] = []
        }else{
            output[index].push(input.charAt(i))
        }
    }
    return output
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))