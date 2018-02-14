var binarySearch = function(array, key) {
	var midIndex = Math.floor(array.length / 2);
	var midElement = array[midIndex];

	if (midElement === key) {
		console.log(true);
		return true;
	} else if (midElement > key && array.length > 1) {
		return binarySearch((array.splice(0, midIndex)), key);

	} else if(midElement < key && array.length > 1) {
		return binarySearch((array.splice(midIndex, array.length -1)), key);
	} else {
		console.log(false);
		return false
	}
}

binarySearch([1,2,3,5,6,7,9,10], -10);