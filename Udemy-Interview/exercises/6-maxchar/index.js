// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	var counterObj = {};
	
	//считаем вхождения в аналог map
	for(var char of str) {
		if(counterObj[char] === undefined) {
			counterObj[char] = 1;
		}
		else {
			counterObj[char] += 1;
		}
	}
	
	//сортируем массив по количеству повторений
	var counterArr = Object.entries(counterObj).sort((a, b) => {
		a[1] - b[1]
	});
	
	//возвращаем самую частую букву в слове
	return counterArr[0][0];
}

module.exports = maxChar;
