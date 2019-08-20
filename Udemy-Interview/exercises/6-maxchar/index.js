// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//авторское решение с 2мя проходами
function maxChar(str) {
	var charMap = {};
	var max = 0;
	let maxLetter = '';
	
	//считаем вхождения в аналог map
	for(var char of str) {
		if(!charMap[char]) {
			charMap[char] = 1;
		}
		else {
			charMap[char]++;
		}
	}
	
	for (let char in charMap) {
		if(charMap[char] > max) {
			max = charMap[char];
			maxLetter = char;
		}
	}

	//возвращаем самую частую букву в слове
	return maxLetter;
}



//решение с одним проходом по строке
//function maxChar(str) {
//	var charMap = {};
//	var max = 0;
//	let maxLetter = str[0];
//	
//	//считаем вхождения в аналог map
//	for(var char of str) {
//		if(!charMap[char]) {
//			charMap[char] = 1;
//		}
//		else {
//			var value = charMap[char] + 1;
//			charMap[char] = value;
//			if(value > max) {
//				max = value;
//				maxLetter = char;
//			}
//		}
//	}
//
//	//возвращаем самую частую букву в слове
//	return maxLetter;
//}



//function maxChar(str) {
//	var charMap = {};
//	
//	//считаем вхождения в аналог map
//	for(var char of str) {
//		charMap[char] = charMap[char] + 1 || 1;
//	}
//	
//	//сортируем массив по количеству повторений
//	var counterArr = Object.entries(charMap).sort((a, b) => {
//		a[1] - b[1]
//	});
//	
//	//возвращаем самую частую букву в слове
//	return counterArr[0][0];
//}

module.exports = maxChar;
