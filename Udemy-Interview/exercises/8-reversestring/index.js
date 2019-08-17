// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
//	return str.split('').reverse().join('');
	
	var result = '';
	var length = str.length-1;
	for(var i = length; i >= 0; i--) {
		result+=str[i];
	}
	return result;
}

module.exports = reverse;
