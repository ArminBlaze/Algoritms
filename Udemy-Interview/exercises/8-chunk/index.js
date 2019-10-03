// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//Мои решения:
//function chunk(array, size) {
//	var newArr = [];

//	while(array.length > 0) {
//		newArr.push( array.splice(0, size) )
//	}

//	return newArr;
//}

//тут я решил, что в arr.slice(start, end) нельзя передавать end больше чем длина arr. Поэтому нагромоздил лишнего кода.
//function chunk(array, size) {
//	var newArr = [];
//	var idx = 0;
//	
//	while(idx+size <= array.length) {
//		newArr.push( array.slice(idx, idx+size) )
//		idx = idx + size;
//	}
//	
//	if(idx < array.length) {
//		newArr.push( array.slice(idx) )
//	}
//	
//	return newArr;
//}

//вместо idx можно использовать newArr.length!
//Но это выглядит немного запутанно
//function chunk(array, size) {
//	var newArr = [];
//	
//	while(newArr.length*size + size <= array.length) {
//		newArr.push( array.slice(newArr.length*size, newArr.length*size+size) )
//	}
//	
//	if(newArr.length*size < array.length) {
//		newArr.push( array.slice(newArr.length*size) )
//	}
//	
//	return newArr;
//}


//Алгоритм автора:
//	1) Запускаем перебор каждого элемента array
//	2) Если в newArr нет элементов или длина последнего элемента (подмассива) меньше чем size, то создаём новый подмассив и добавляем в него текущий элемент из array.
//	3) А иначе добавляем текущий элемент в последний подмассив в newArr.


//Варианты авторского решения:

//function chunk(array, size) {
//	var newArr = [];
//	
//	array.forEach((item) => {
//		if(newArr.length === 0 || newArr[newArr.length-1].length === size) {
//			newArr.push([item])
//		}
//		else {
//			newArr[newArr.length-1].push(item);
//		}
//	})
//	
//	return newArr;
//}

//такой же вариант, но с доп переменной lastSubArr, которая немного укорачивает код
//function chunk(array, size) {
//	var newArr = [];
//	
//	array.forEach((item) => {
//		const lastSubArr = newArr[newArr.length-1]; //тут будет undefined, если в newArr ничего нет
//		
//		if(!lastSubArr || lastSubArr.length === size) {
//			newArr.push([item])
//		}
//		else {
//			lastSubArr.push(item);
//		}
//	})
//	
//	return newArr;
//}


//Решение 2 через slice()
//на каждой итерации создаём подмассив длинной size. И копируем туда нужную часть array. А потом сдвигаем индекс на size.
//Очень простое решение
function chunk(array, size) {
	var newArr = [];
	let idx = 0;
	
	while(idx < array.length) {
		newArr.push(array.slice(idx, idx+size));
		idx+=size;
	}

	return newArr;
}


module.exports = chunk;
