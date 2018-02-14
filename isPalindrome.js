var isPalindrome = function(string) {
	// Turn input string into array
	var strArray = string.toLowerCase().split('');
	console.log(strArray);
	// Create list of acceptable characters
	var validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
	console.log(validChar);

	// Create a new array with only letters and all lowercase
	var result = [];
	strArray.forEach(function(character) {
		if (validChar.indexOf(character) > -1) {
			result.push(character);
		}
	});
	if (result.join('') === result.reverse().join('')) {
		console.log("Input is a palindrome!");
		return true;
	} else {
		console.log("Input is NOT a palindrome");
		return false;
	}
}

isPalindrome("Frog and Toad are Friends");