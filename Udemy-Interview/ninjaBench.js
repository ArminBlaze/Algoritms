//		Тест выдаёт во сколько раз одна ф-ция быстрее другой



//results =  ninjaBenchmark([func1, func2], 1, 10000);
//console.log( showBestResults(results) );


//оформить это в модуль с 2-мя функциями на экспорт
function showBestResults(resultArr) {
	var best = {time: Infinity, fn: 0};
	var second = {time: Infinity, fn: 0};
	
	
	resultArr.forEach( ({time, name}, i) => {
		if(i === 0) {
			best = {time, fn: name};
			second = {time, fn: name}
		}
		
		if(time < best.time) {
			best = {time, fn: name};
		}
		else if(time < second.time) {
			second = {time, fn: name}
		}
	})
	
	let str = '';
	
	
	if (best.time !== Infinity) str += `Лучшее время ${best.time} мс у функции ${best.fn}\n`
	if (second.time !== Infinity) {
		str += `Второе время ${second.time} мс у функции ${second.fn}\n` +
			`Функция ${best.fn} быстрее чем функция ${second.fn} в ${second.time/best.time } раз`
	}
		

	return str;
}

function ninjaBenchmark(funcsArr, repeatNum, fnArg) {
	console.log(funcsArr[0].name);
	var resultArr = funcsArr.map(fn => {
		var timeLoop = performance.now();
		for (var i = 0; i < repeatNum; i++) {
			var result = fn(fnArg);
		}
		timeLoop = performance.now() - timeLoop;

		return {
			time: timeLoop,
			name: fn.name
		};
	});
	

	return resultArr;
}

export {
	ninjaBenchmark,
	showBestResults
}