class StatSecond {
	constructor(second, previousStatSecond = null) {
		this.second = second;
		this.errors = 0;
		this.correctKeystrokes = 0;
		this.wpm = 0;
		this.smoothedWpm = 0;
		this.previousStatSecond = previousStatSecond;
	}

	calculateWpm() {
		this.wpm = ((this.correctKeystrokes+this.errors)/5) * 60;


		if(this.previousStatSecond != null && this.previousStatSecond.previousStatSecond != null){
			let previousWpm = this.previousStatSecond.wpm;
			let twoBackWpm = this.previousStatSecond.previousStatSecond.wpm;
			this.smoothedWpm = (this.wpm + previousWpm + twoBackWpm) / 3;
		}else if(this.previousStatSecond != null) {
			let previousWpm = this.previousStatSecond.wpm;
			this.smoothedWpm = (this.wpm + previousWpm) / 2;
		}else {
			this.smoothedWpm = this.wpm;
		}
	}

}