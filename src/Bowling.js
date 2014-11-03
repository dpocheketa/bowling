function bowlingScoring(arr){
	if (!arr || arr.length !== 10 ) throw new Error("Hueston we have a problem");

	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		var frame = arr[i];

		sum += frame[0];

		if (frame[0] == 10){
			sum += arr[i+1][0];
			if (arr[i+1][1]) {
				sum += arr[i+1][1];
			} else {
				sum += arr[i+2][0];
			};	
		} else {
			sum += frame[1];
		};

	};

	return sum;
};