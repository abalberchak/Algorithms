var meanMedianMode = function(array) {
	return {
		mean: getMean(array),
		median: getMedian(array),
		mode: getMode(array)
	};
}


var getMean = function(array) {
	var sum = 0;
	array.forEach(function(num) {
		sum += num;
	});
	var mean = sum / (array.length);
	return mean;
}

var getMedian = function(array) {
	array.sort(function(a, b) {
		return a - b;
	});

	var median;
	if (array.length % 2 === 0) {
		var mid1 = array[(array.length / 2) - 1];
		var mid2 = array[(array.length / 2)];
		median = ((mid1 + mid2) / 2);
	} else {
		median = array[(Math.floor(array.length / 2))];
	}
	return median;
}

var getMode = function(array) {
	var modeObj = {};
	array.forEach(function(num) {
		if (!modeObj[num]) {
			modeObj[num] = 0;
		}
		modeObj[num]++;
	});
	var maxFreq = 0;
	var modes = [];
	for (var num in modeObj) {
		if (modeObj[num] > maxFreq) {
			modes = [num];
			maxFreq = modeObj[num];
			console.log(maxFreq);
		} else if (modeObj[num] === maxFreq) {
			modes.push(num);
		}
	}
	if (modes.length === Object.keys(modeObj).length) {
		modes = [];
	}
	return modes;
}

meanMedianMode([1,3,4,4,6]);