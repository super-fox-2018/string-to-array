function arrayToString(input){
	let temp = []
	temp = input.split(',')
	console.log(temp);
	let board = []
	for(var i=0;i<temp.length;i++){
		board.push([])
		for(var j=0;j<temp[i].length;j++){
			board[i].push(temp[i][j])
		}
	}
	console.log(board);
}

arrayToString('aqrst,ukaei,ffooo')