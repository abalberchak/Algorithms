/////////// Fizzbuzz ///////////
var fizzBuzz = function(num) {
var result = [];
for (var i = 1; i <= num; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		result.push("fizzBuzz");
	} else if (i % 3 === 0) {
		result.push("fizz");
	} else if (i % 5 === 0) {
		result.push("buzz");
	} else {
		result.push(i);
	}
}
console.log(result);
return result;
}
fizzBuzz(15);





/////////// bubbleSort ///////////
var bubbleSort = function(array) {
	for (var i = array.length - 1; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			if (array[j] > array[j + 1]) {
				var temp = array[j + 1];
				array[j + 1] = array[j];
				array[j] = temp;
			}
		}
	}
	console.log(array);
	return array;
}

bubbleSort([-12, 1, 4, 0, -3, -4, 10, 2, -90]);



/////////// binarySearch ///////////
var binarySearch = function(array, key) {
	var midIndex = Math.floor(array.length / 2);
	var midElement = array[midIndex];

	if (key === midElement) {
		console.log(true);
		return true;
	} else if (key < midElement) {
		return binarySearch((array.splice(0, midIndex)), key);
	} else if (key > midElement) {
		return binarySearch((array.splice(midIndex, array.length -1)), key);
	} else {
		console.log(false);
		return false;
	}
}
	

binarySearch([2,4,5,6,8,10,12], 2);


/////////// fibonacci ///////////
var fibonacci = function(position) {
	if (position < 3) {
		return 1;
	} else {
		return fibonacci(position -1) + fibonacci(position - 2);
	}
}

fibonacci(4);


/////////// isPalindrome ///////////
var isPalindrome = function(string) {
	var newArray = string.toLowerCase().split('');
	// console.log(newArray);
	var validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
	// console.log(validChar);
	var result = [];
	newArray.forEach(function(character) {
		if (validChar.indexOf(character) > -1) {
			result.push(character);
		}
	});
	// console.log(result);

	if (result.join('') === result.reverse().join('')) {
		console.log('Input is a palindrome.');
		return true;
	} else {
		console.log('Input is NOT a palindrome.');
		return false;
	}

}
isPalindrome('frog');


/////////// reverseWords ///////////
var reverseWords = function(string) {
	var stringArr = string.split('');
	var midIndex = Math.floor(stringArr.length / 2);

	for (var i = 0; i < midIndex; i++) {
		var temp = stringArr[i];
		stringArr[i] = stringArr[stringArr.length - 1 - i];
		stringArr[stringArr.length - 1 - i] = temp;
	}
	console.log(stringArr);
	return stringArr;
}

reverseWords('frog');




/////////// quickSort ///////////
var quickSort = function() {

}




/////////// mergeSort ///////////
var mergeSort = function(array) {
	if (array.length < 2) {
		return array;
	}

	var midIndex = Math.floor(array.length / 2);
	var array1 = array.slice(0, midIndex);
	var array2 = array.slice(midIndex, array.length);

	return merge(mergeSort(array1), mergeSort(array2));
}

var merge = function(array1, array2) {
	var result = [];
	var minElement;
	while (array1.length && array2.length) {
		if (array1[0] < array2[0]) {
			minElement = array1.shift();
			result.push(minElement);
		} else {
			minElement = array2.shift();
			result.push(minElement);
		}
	}

	if (array1.length) {
		result = result.concat(array1);
	} else {
		result = result.concat(array2);
	}
	return result;

}

mergeSort([2,5,1,0,-10,3,20,-19]);

