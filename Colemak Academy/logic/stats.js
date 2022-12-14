class Stats {
	constructor() {
		this.currentSecond;
		this.seconds = [];
	}

	generateDataForChart() {
		let dataToReturn = [];

		this.seconds.forEach((second) => {
			let dataPoint = [[second.second + " seconds"], [second.wpm]];
			dataToReturn.push(dataPoint);
		});

		// remove the last element because the wpm will always be 0
		dataToReturn.pop();

		return dataToReturn;
	}

}