// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverseInt(n) {
	var sign = Math.sign(n);

	var reversed = n.toString().split('').reverse().join('');
	return sign * parseInt(reversed);
}

//function reverseInt(n) {
//	var sign = Math.sign(n);
//	
//	var strInt = n*sign + '';
//	return sign * strInt.split('').reverse().join('');
//}

//function reverseInt(n) {
//	var strInt = n + '';
//	if(n<0) {
//		return -strInt.split('-')[1].split('').reverse().join('');
//	}
//	return +strInt.split('').reverse().join('')
//}

module.exports = reverseInt;
