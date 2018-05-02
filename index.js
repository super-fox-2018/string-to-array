function stringToArray(arr){
    var result=[]
    var arrKecil=[]
        for(var i=0; i<arr.length; i++){
            if(arr[i] !== ","){
                // console.log(i)
                arrKecil.push(arr[i])
            }
            if (arr[i] === ","  || i === arr.length-1) {
                result.push(arrKecil)
                arrKecil=[]
            }
        }
        return result
    }
    
    var arr="aqrst,ukaei,ffooo"
    console.log(stringToArray(arr))
    /*
    [["a","q","r","s","t"],
     ["u","k","a","e","i"],
     ["f","f","o","o","o"]]
    */
    var arr="qwer,tyui,asdf,ghjk"
    console.log(stringToArray(arr))
    /*
    [["q","w","e","r"],
     ["t","y","u","i"],
     ["a","s","d","f"],
     ["g","h","j","k"]]
    */