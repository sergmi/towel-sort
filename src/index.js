module.exports = function towelSort (matrix) {
	let res = [];
	if(!matrix||matrix.length === 0){return [];}
	else{
		matrix.forEach(function(a,b,c){
			if(b%2 !== 0){a.reverse();}
			res = res.concat(a);
		});
	}
	return res;
}