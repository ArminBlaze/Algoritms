// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//function chunk(array, size) {
//	var newArr = [];
//	while(array.length > 0) {
//		newArr.push( array.splice(0, size) )
//	}
//	return newArr;
//}


function chunk(array, size) {
	var newArr = [];
	var idx = 0;
	
	while(idx+size <= array.length) {
		newArr.push( array.slice(idx, idx+size) )
		idx = idx + size;
	}
	
	if(idx < array.length) {
		newArr.push( array.slice(idx) )
	}
	
	return newArr;
}


module.exports = chunk;
