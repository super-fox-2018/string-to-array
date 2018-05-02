function stringToArray(str) {
	var splitStr= str.split(",")
	var finalArr=[]
	// return splitStr
	for(var i=0;i<splitStr.length;i++) {
		finalArr.push(splitStr[i].split(""))
	}
	return finalArr	
}

console.log(stringToArray ("aqrst,ukaei,ffooo"))
console.log(stringToArray ("qwer,tyui,asdf,ghjk"))