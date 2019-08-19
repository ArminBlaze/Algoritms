// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	return str.split('').every( (char, i) => {
		return char === str[str.length - 1 - i];
	})
}


//function palindrome(str) {
//	var i = 0;
//	var j = str.length - 1;
//	
//	for(; i < j; i++, j--) {
//		if(str[i] !== str[j]) {
//			return false;
//		}
//	}
//	
//	return true;
//}

//function palindrome(str) {
//	return str === reverse(str)
//}
//
//function reverse(str) {
//	return str.split('').reduce( (result, currentChar) => currentChar + result,
//															"")
//}

module.exports = palindrome;
