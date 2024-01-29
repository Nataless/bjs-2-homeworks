function getArrayParams(arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = arr[0];

	for (let i = 1; i < arr.length; i++) {
		const x = arr[i];
		if (x < min) min = x;
		else if (x > max) max = x;
		sum += x;
	}

	const avg = number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};

}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
