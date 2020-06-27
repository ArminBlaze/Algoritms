// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	var Reg1 = /[^A-Za-zА-Яа-яЁё]/g; 
	stringA = stringA.replace(Reg1, "");
	stringB = stringB.replace(Reg1, "");
	
	var str1 = stringA.toLowerCase().split('').sort().join();
	var str2 = stringB.toLowerCase().split('').sort().join();
	
	return str1 === str2;
}

//function anagrams(stringA, stringB) {
//	var str1, str2;
//	
//	if(stringA.length >= stringB.length) {
//		str1 = stringA.toLowerCase();
//		str2 = stringB.toLowerCase();
//	}
//	else {
//		var str1 = stringB.toLowerCase();
//		var str2 = stringA.toLowerCase();
//	}
//	
//	
//	//для каждой буквы найти её в другой строке и записать её номер.
//	//для поиска пропускать уже найденные буквы
//	//записывать индексы найденных?
//	
//	var indexs = {};
//	var Reg1 = new RegExp("[a-z]"); 
//	
//	for (let char of str1) {
//		debugger;
//		
//		if(!Reg1.test(char)) continue;
//		//найти индекс этой буквы в строке2
//		//если он есть - записать в indexs и пойти дальше
//		//если его нет - вернуть false
//		//если он есть, но он уже записан в indexs - поискать с этого места дальше
//		
//
//		let idx = 0;
//		while(idx < str2.length) {
//			pos = str2.indexOf(char, idx);
//			if(pos === -1) return false;
//			
//			if(!indexs[pos]) {
//				indexs[pos] = true;
//				break;
//			}
//			else {
//				idx = pos+1;
//				continue;
//			}
//		}
//	}
//	
//	return true;
//}

module.exports = anagrams;
