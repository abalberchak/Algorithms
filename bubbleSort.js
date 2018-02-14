var bubbleSort = function(array) {
	// 1. Loop through the initial number
	for (var i = array.length - 1; i > 0; i--) {

		// 2. Loop through the number after
		for (var j = 0; j < i; j++) {
			// 3. Compare the first with the index adjacent. If out of order, swap.
			if (array[j] > array[j + 1]) {
				var temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
			console.log(array);
		}
	}
	console.log(array);
	return array;
}

bubbleSort([3,5,2,8,-4,0]);