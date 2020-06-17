var prompt = document.querySelector('#prompt');
var score;
var scoreText = document.querySelector('#scoreText');
var scoreMax = 50; // total number of words the user must type
var seconds = 0;
var minutes = 0;
var timeText = document.querySelector('#timeText');
var gameOn = false; // set to true when user starts typing in input field
var resetButton = document.querySelector('#resetButton');
var accuracyText = document.querySelector('#accuracyText');
var wpmText = document.querySelector('#wpmText');
var testResults = document.querySelector('#testResults');
var input = document.querySelector('#userInput');
var correct = 0; // number of correct keystrokes during a game
var errors = 0; // number of typing errors during a game
var buttons = document.querySelector('nav').children;
var currentLevelList = level1;
var correctAnswer = document.querySelector('#currentWord').innerHTML;
var letterIndex = 0; // Keeps track of where in a word the user is
					 // Increment with every keystroke except ' ', return, and backspace
					 // Decrement for backspace, and reset for the other 2
var currentWord = document.querySelector('#currentWord');

var answerString = generateFullPrompt();

// call to initialize
reset();


/*________________Timers and Listeners___________________*/

// makes the clock tic
setInterval(()=> {
	if(gameOn) {
		if(seconds >= 59) {
			seconds = -1;
			minutes++;
		}
		resetTimeText();
	}
}, 1000);

// starts the timer when there is any change to the input field
input.addEventListener('keydown', (e)=> {
	gameOn = true;
});

// listens for the enter  and space key. Checks to see if input contains the
// correct word. If yes, generate new word. If no, give user
// negative feedback
document.addEventListener('keydown', (e)=> {
	if(e.keyCode === 13 || e.keyCode === 32) {
		if(checkAnswer() && gameOn) {
			// stops a ' ' character from being put in the input bar
			// it wouldn't appear until after this function, and would
			// still be there when the user goes to type the next word
			e.preventDefault();

			generateRandomPrompt();

			// update scoreText
			updateScoreText();

			// end game if score == scoreMax
			if(score >= scoreMax){
				// erase prompt
				prompt.classList.toggle('noDisplay');

				// make resetButton visible
				resetButton.classList.remove('noDisplay');
				// change focus to resetButton
				resetButton.focus();

				// pause timer
				gameOn = false;

				// set accuracyText
				accuracyText.innerHTML="Accuracy: " + ((100*correct)/(correct+errors)).toFixed(2) + '%';
				wpmText.innerHTML = 'WPM: ' + (((correct+errors+scoreMax)/5)/(minutes+(seconds/60))).toFixed(2);
				// make accuracy visible
				testResults.classList.toggle('transparent');

				// set correct and errors counts to 0
				correct = 0;
				errors = 0;

			}
			// clear input field
			document.querySelector('#userInput').value = '';

			// set letter index (where in the word the user currently is)
			// to the beginning of the word
			letterIndex = 0;
		
		}// end if statement
	}// end keyEvent if statement
});


// add event listeners to level buttons
for(button of buttons) {
	let b = button;
	b.addEventListener('click', ()=> {

		// stop timer
		gameOn = false;

		// clear input field
		document.querySelector('#userInput').value = '';

		// clear highlighted buttons
		clearCurrentLevelStyle();
		b.classList.add('currentLevel');
		// change wordList
		let lev = b.innerHTML.replace(/ /,'').toLowerCase();

		// hardcode allwords because the button value does 
		// not contain the number 7
		if(lev=='allwords') {
			lev = 'level7';
		}
		// window[] here allows us to select the variable levelN, instead of
		// setting currentLevelList to a string
		currentLevelList = window[lev];

		thirdRand = Math.floor(Math.random()*currentLevelList.length);

		// reset everything
		reset();

		// int representation of level we are choosing
		let level = (lev[lev.length-1]);
		// loop through each level to the current one and turn on
		// displays for the buttons
		for(let i = 1; i <= 6; i++) {
			let keysToStyle = document.querySelector('#keyImage'+ i);
			if(i<=level) {
				keysToStyle.classList.remove('transparent');
			} else {
				keysToStyle.classList.add('transparent');
			}
		}
	});
}

// resetButton listener
resetButton.addEventListener('click', ()=> {
	reset();
});


/*________________FUNCTIONS___________________*/

// runs on page load
// Set a new prompt word and change variable text
function reset(){
	// set error styling back to normal
	currentWord.style.color = 'white';
	// set current letter index back to 0
	letterIndex = 0;

	// set correct and errors counts to 0
	correct = 0;
	errors = 0;

	// set to -1 before each game because score is incremented every time we call
	// updateScoreText(), including on first load
	score = -1;

	// reset clock
	minutes = 0;
	// same as with score, seconds must be -1 to compensate for the initial tic
	seconds = -1;

	// reset timeText
	resetTimeText();

	// set accuracyText to be transparent
	testResults.classList.add('transparent');

	// no display for reset button during game
	resetButton.classList.add('noDisplay');

	//set prompt to visible
	prompt.classList.remove('noDisplay');

	answerString = generateFullPrompt();
	generateRandomPrompt();

	// change the 0/50 text
	updateScoreText();

	// change focus to the input field
	input.focus();
}

function checkAnswer() {
	// user input
	inputVal = input.value;

	return inputVal == correctAnswer;
}

// modifier is set to -1 when keystroke is backspace, to account for the character
// that is about to be deleted
function checkAnswerToIndex(modifier) {
	// user input
	inputVal = input.value;

	return inputVal.slice(0,letterIndex+modifier) == correctAnswer.slice(0,letterIndex+modifier);
}

function generateFullPrompt() {
	let str = '';
	for(let i = 0; i < scoreMax; i++) {
		let rand = Math.floor(Math.random()*currentLevelList.length);
		str += currentLevelList[rand] + ' ';
	}
	return str;
}

// updates the correct answer and manipulates the dom
function generateRandomPrompt() {
	// make sure no 'incorrect' styling still exists
	input.style.color = 'black';

	// remove animation state on prompt
	prompt.classList.remove('slideLeft');
	// set position back to normal
	prompt.style.transform='translateX(50px)';
	// animate nextWord to slide left
	setInterval(()=> {
		prompt.classList.add('slideLeft');
	},10);

	prompt.innerHTML = answerString;
	correctAnswer = answerString.split(' ')[0];
	answerString = answerString.substr(answerString.indexOf(" ") + 1);
}

// updates the numerator and denomitator of the scoretext on 
// the document
function updateScoreText() {
	scoreText.innerHTML = ++score + "/" + scoreMax;
}

function resetTimeText() {
	timeText.innerHTML = minutes + 'm :' + ++seconds + ' s';
}

// removes currentLevel styles from all buttons. Use every time the 
// level is changed
function clearCurrentLevelStyle() {
	for(button of buttons) {
		button.classList.remove('currentLevel');
	}
}




/*_________________________________________________________*/
/*There's going to be a whole big section here that just  */
/*remaps keystroke input to Colmak. Have funnnnnnnnnn!!!!!!*/
/*_________________________________________________________*/

var colemakMap = {
	'KeyQ' : "q",
	'KeyW' : 'w',
	'KeyE' : 'f',
	'KeyR' : 'p',
	'KeyT' : 'g',
	'KeyY' : 'j',
	'KeyU' : 'l',
	'KeyI' : 'u',
	'KeyO' : 'y',
	'KeyP' : ';',
	'BracketLeft' : '[',
	'KeyA' : 'a',
	'KeyS' : 'r',
	'KeyD' : 's',
	'KeyF' : 't',
	'KeyG' : 'd',
	'KeyH' : 'h',
	'KeyJ' : 'n',
	'KeyK' : 'e',
	'KeyL' : 'i',
	'Semicolon' : 'o',
	'KeyZ' : 'z',
	'KeyX' : 'x',
	'KeyC' : 'c',
	'KeyV' : 'v',
	'KeyB' : 'b',
	'KeyN' : 'k',
	'KeyM' : 'm',
	'Comma' : ',',
	'Period' : '.',
	'Slash' : '/'
};
var keyboardMap = colemakMap;

input.addEventListener('keydown', (e)=> {
	// this is the actual character typed by the user
	let char = e.code;
	let finalInput;


	// prevent char from being typed and replace new colmak char
	if(char in keyboardMap) {
		e.preventDefault();
		if(!e.shiftKey) {
				finalInput = keyboardMap[char];
			input.value += keyboardMap[char];
		}else {
			finalInput = keyboardMap[char].toUpperCase();
			input.value += keyboardMap[char].toUpperCase();
		}
	}

	// keep track of wrong keystrokes
	if(finalInput == correctAnswer.charAt(letterIndex)){
		correct++;
	}else if(e.keyCode == 16 || e.keyCode == 13 || e.keyCode == 17 || e.keyCode == 20) {
		// if we hit the shift or return or ctr or caps key, we need to decrement letterIndex, because they
		// aren't actual keystrokes
		letterIndex--;
	}else if(e.keyCode == 8) {
		// check answer to current point in the word. If it is correct, apply normal styling
		if(checkAnswerToIndex(-1)) {
			input.style.color = 'black';
		}
		// if backspace, letterIndex should be decremented twice,
		// once for once to cancel out the increment, and again to
		// move backwords in the word
		if(letterIndex!=0){
			letterIndex-=2;
		}else {
			letterIndex--;
		}
	}else{
		if(checkAnswerToIndex(0)) {
			errors++;
			input.style.color = 'red';
		}
		if(e.keyCode == 32) {
			errors--;
		}
	}

	letterIndex++;
});


document.addEventListener('keyup', (e)=> {
	e.preventDefault();
	console.log('prevented');

});