var fizzBuzz = function(num) {
	// 1. Instantiate initial and final arrays
	var array = [];
	var final = [];

	// 2. Convert input number into an array.
	for (var i = 1; i <= num; i++) {
		array.push(i);
	}
	// 3. Loop over initial array to determine correct words. Push into final array
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 3 === 0 && array[i] % 5 === 0) {
			final.push("FizzBuzz");
		} else if (array[i] % 3 === 0) {
			final.push("Fizz");
		} else if (array[i] % 5 === 0) {
			final.push("Buzz");
		} else {
			final.push(array[i]);
		}
	}
	console.log(final);
	// 4. Return the new and final array
	return final;
}

fizzBuzz(30);