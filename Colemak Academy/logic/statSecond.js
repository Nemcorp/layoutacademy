class StatSecond {
	constructor(second) {
		this.second = second;
		this.errors = 0;
		this.correctKeystrokes = 0;
		this.wpm = 0;
	}

	calculateWpm() {
		this.wpm = ((this.correctKeystrokes+this.errors)/5) * 60;
	}

}