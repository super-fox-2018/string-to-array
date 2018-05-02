function stringArr(input){
let split=input.split(',')


let hasil=[]

for(let i=0;i<split.length;i++){
    var tampung =[]
    for(let j = 0;j<split[i].length;j++){
       
        tampung.push(split[i][j])
    }
    hasil.push(tampung)
}
return hasil
}
console.log(stringArr('aqrst,ukaei,ffooo'))