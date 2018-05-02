function stringToArray(str){
    var string = str;
    var arr  = string.split(',');
    var row = arr.length-1;
    console.log(arr, row)
    var disp = [];
    for(let a=0; a<=row; a++){
        
        disp[a] = []
        for(let b=0; b<=arr[a].length-1; b++){
            disp[a].push(arr[a][b])
        }
        
    }
    return disp;
}






var input = 'aqrts,ukaei,fffoo'
console.log(stringToArray(input));