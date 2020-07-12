/*_____________dom elements_________*/

// the string of text that shows the words for the user to type
var prompt 		= document.querySelector('#prompt'),
//
wordChain 		= document.querySelector('#wordChain'),
//
answer 			= document.querySelector('#answer'),
//
scoreText 		= document.querySelector('#scoreText'),
//
timeText 		= document.querySelector('#timeText'),
//
resetButton 	= document.querySelector('#resetButton'),
//
accuracyText 	= document.querySelector('#accuracyText'),
//
wpmText 		= document.querySelector('#wpmText'),
//
testResults 	= document.querySelector('#testResults'),
//
input 			= document.querySelector('#userInput'), 
// the main typing area
inputKeyboard 	= document.querySelector('#inputKeyboard'), 
// keyboard layout customization ui
inputShiftKeyboard = document.querySelector('#inputShiftKeyboard'), 
// the dom element representing the shift keys in customization ui
customInpur 	= document.querySelector('#customInput'),
//
buttons 		= document.querySelector('nav').children,
//
currentWord 	= document.querySelector('#currentWord'),
//
select 			= document.querySelector('select'),
//
mappingStatusButton = document.querySelector('#mappingToggle label input'),
//
mappingStatusText = document.querySelector('#mappingToggle h6 span'),
// done button on the custom layout ui
doneButton 		 = document.querySelector('#doneButton'),
// custom ui input field for custom keys
customUIKeyInput = document.querySelector('#customUIKeyInput');

var promptOffset 	= 0;  // is this needed? May delete
var score;				  // tracks the current number of currect words the user has typed
var scoreMax 		= 15; // total number of words the user must type
var seconds 		= 0;  // tracks the number of seconds%minutes*60 the current test has been running for 
var minutes 		= 0;  // tracks the number of minutes the current test has been running for
var gameOn 			= false; // set to true when user starts typing in input field
var correct 		= 0;  // number of correct keystrokes during a game
var errors 			= 0;  // number of typing errors during a game
var currentLevel 	= 1;  // int representation of the current level, which determines which letter set to test
var correctAnswer;        // string representation of the current correct word
var letterIndex 	= 0;  // Keeps track of where in a word the user is
					      // Increment with every keystroke except ' ', return, and backspace
					      // Decrement for backspace, and reset for the other 2
var onlyLower		= true;  // If only lower is true, incude only words
					      // without capital letters
var mapping 		= true;  // if true, user keybard input will be mapped to the chosen layout. No mapping otherwise
var answerString;		  // A string representation of the words for the current test. After a correct word is typed,
						  // it is removed from the beginning of answerString. By the end of the test, there should be 
						  // no words in answerString
var keyboardMap = layoutMaps['dvorak'];
var letterDictionary = levelDictionaries['dvorak'];
var currentLayout = 'dvorak';

start();
init();

// this is the true init, which is only called once. Init will have to be renamed
// Call to initialize
function start() {
	document.querySelector('#layoutName').innerHTML = currentLayout;
	document.querySelector('#cheatsheet').innerHTML = keyboardDivs;
	inputKeyboard.innerHTML = customLayout;
	inputShiftKeyboard.innerHTML = customShiftLayout;

}


// some of the stuff in this function should probably be put into reset and we should examine when reset is called
// the rest should be in start(), which works like an actual init function should
// RENAME AND REFACTOR THIS PLEASE
function init() {
	createTestSets();
	reset();
	updateCheatsheetStyling(currentLevel);
}


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

// listens for layout change
select.addEventListener('change', (e)=> {
	// if custom input is selected, show the ui for custom keyboards
	if(select.value == 'custom') {
		customInput.style.display = 'flex';
	}else {
		customInput.style.display = 'none';
	}
	// change keyboard map and key dictionary
	keyboardMap = layoutMaps[select.value];
	console.log(select.value);
	letterDictionary = levelDictionaries[select.value];
	currentLayout = select.value;

	// reset everything
	init();
});



/*___________________________________________________________*/
/*______________listeners for custom ui input________________*/

// listener for the custom layout ui 'done' button
doneButton.addEventListener('click', ()=> {
	customInput.style.display = 'none';
	updateCheatsheetStyling(currentLevel);
});

// listen for shift key to display different layer of custom ui input 
document.addEventListener('keydown', (e)=> { 
	if(e.keyCode == 16){
		inputKeyboard.style.display = 'none';
		inputShiftKeyboard.style.display = 'block';
	}
});
// listen for shift key up to display different layer of custom ui input 
document.addEventListener('keyup', (e)=> { 
	if(e.keyCode == 16){
		inputKeyboard.style.display = 'block';
		inputShiftKeyboard.style.display = 'none';
	}
});

// add key listeners for each of the keys the custom input ui
// When clicked, a key becomes 'selectedInputKey' and all others lose
// this class. 
document.addEventListener('click', function (e) {

	let k = e.target.closest('.cKey');
	if (k) {
		// change focus to the customUIKeyInput field
		customUIKeyInput.focus();

		// remove 'selectedInputKey' from any keys previously clicked
		clearSelectedInput();

		k.classList.add('selectedInputKey');
		if(k.children[0].innerHTML == '') {
			k.children[0].innerHTML = '_';
		}
		k.children[0].classList.add('pulse');
	}
}, false);

// listener for input field. Updates on any input, clearing the current selected
// input key, and setting the new value on the correct layer
customUIKeyInput.addEventListener('keyup', (e)=> {
	let k = document.querySelector('.selectedInputKey');
	// if key entered is not shift, update dom element and key mapping value
	if(e.keyCode != 16) {
		k.children[0].classList.remove('pulse');

		k.children[0].innerHTML = e.key;
		// ADD NEW KEY MAPPING DATA HERE
		// RIGHT NOW IT ALWAYS MAPS TO A. FIX THIS
		console.log(k.id + ' ' + e.key);
		layoutMaps.custom[k.id] = e.key;
	}

	// clear input field
	customUIKeyInput.value = '';
});

// remove 'selectedInputKey' from any keys previously clicked
function clearSelectedInput() {
	let k = document.querySelector('.selectedInputKey');
	if(k){
		k.classList.remove('selectedInputKey');
		k.children[0].classList.remove('pulse');
	}
}


/*______________listeners for custom ui input________________*/
/*___________________________________________________________*/




// listens for the enter  and space key. Checks to see if input contains the
// correct word. If yes, generate new word. If no, give user
// negative feedback
document.addEventListener('keydown', (e)=> {
	// if on the last word, check every letter so we don't need a space
	if(score == scoreMax-1 && checkAnswer() && gameOn) {
		console.log('game over');
		endGame();
	}

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
				endGame();
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
		//lev = parseInt(b.id[3]);
		// // hardcode allwords because the button value does 
		// // not contain the number 7
		if(lev=='allwords') {
			lev = 'level7';
		}
			// int representation of level we are choosing
		let level = (lev[lev.length-1]);

		// window[] here allows us to select the variable levelN, instead of
		// setting currentLevelList to a string
		currentLevel = level;
		
		// reset everything
		reset();

		// take care of styling for the cheatsheet
		updateCheatsheetStyling(level);
	});
}

// updates all styling for the cheatsheet by first resetting all keys,
// then styling those in active levels. takes the current level (int) as a parameter
function updateCheatsheetStyling(level) {

	// loop through all buttons
	let allKeys = document.querySelectorAll('.key');
	for(n of allKeys) {
		//reset all keys to default
		n.classList.add('inactive');
		n.classList.remove('active');
		n.classList.remove('currentLevelKeys');
		n.innerHTML=`
			<span class='letter'></span>
		`
		// the letter that will appear on the key
		let letter = keyboardMap[n.id];
		
		// set of keys to loop through the letter dictionary, which
		// contains info about which levels each key appears at
		let objKeys = Object.keys(letterDictionary);

		// check active levels and apply styling
		for(let i = 0; i < level; i++) {
			if(letterDictionary[objKeys[i]].includes(letter)){
				n.innerHTML=`
					<span class='letter'>`+ letter + `</span>
				`	
				n.classList.remove('inactive');
				if(i==0){
					n.classList.add('homeRow');
				}else if(i==6){
					// all words selected
				}else if(i == level-1){
					n.classList.remove('active');
					n.classList.add('currentLevelKeys');
				}else {
					n.classList.add('active');
				}
			}
		}
	}
}

// listener for keyboard mapping toggle switch
mappingStatusButton.addEventListener('click', ()=> {
	if(mappingStatusText.innerHTML == 'on') {
		// change the status text
		mappingStatusText.innerHTML = 'off';
		mapping = false;

	} else {
		// change the status text
		mappingStatusText.innerHTML = 'on';
		mapping = true;
	}
});

// resetButton listener
resetButton.addEventListener('click', ()=> {
	console.log('reset button called');
	reset();
});


/*________________FUNCTIONS___________________*/

// runs on page load
// Set a new prompt word and change variable text
function reset(){

	console.log('reset called');
	// set current letter index back to 0
	letterIndex = 0;

	// prompt offset back to 0
	promptOffset = 0;

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
	words = answerString.split(' ');
	//reset prompt
	prompt.innerHTML = '';
	for(i = 0; i < scoreMax; i++) {
		prompt.innerHTML += `
			<span id='id`+i+`'> ` + words[i] + ` </span>
		`;
	}

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

function endGame() {
	// erase prompt
	prompt.classList.toggle('noDisplay');

	// make resetButton visible
	resetButton.classList.remove('noDisplay');

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

	// change focus to resetButton
	resetButton.focus();


	// update scoreText
	updateScoreText();
	// clear input field
	document.querySelector('#userInput').value = '';
	// set letter index (where in the word the user currently is)
	// to the beginning of the word
	letterIndex = 0;
}

// creates a string of length 'scoreMax' that will be used as the prompt
// will return only lower case if onlyLower==true. Creates a list with words
// containing a balance of current level letters
function generateFullPrompt() {

	let str = '';
	// stores the letters we have already seen. Will be reset every time we get all
	// the letters we are looking for

	if(wordLists['lvl'+currentLevel].length > 0){
		let requiredLetters = levelDictionaries[currentLayout]['lvl'+currentLevel].split(''); 
		// if this counter hits 3000, there are likely no words matching the search
		// criteria. If that happens, reset required letters
		let circuitBreaker = 0;
		for(let i = 0; i < scoreMax; i++) {
			let rand = Math.floor(Math.random()*wordLists['lvl'+currentLevel].length);
			let wordToAdd = wordLists['lvl'+currentLevel][rand];

			// if the word does not contain any required letters, throw it out and choose again
			if(!contains(wordToAdd, requiredLetters)) {
				//console.log(wordToAdd + ' doesnt have any required letters');
				i--;
			}else if(onlyLower && containsUpperCase(wordToAdd)) {
				// if only lower case is allowed and the word to add contains an uppercase,
				// throw out the word and try again
				i--;
			}else {

				str += wordToAdd + ' ';

				// remove any new key letters from our required list
				removeIncludedLetters(requiredLetters, wordToAdd);
								// if we have used all required letters, reset it
				if(requiredLetters.length == 0 ) {
					requiredLetters = levelDictionaries[currentLayout]['lvl'+currentLevel].split(''); 
				}
			}

			circuitBreaker++;
			// if we're having trouble finding a word with a require letter, reset 'required letters'
			if(circuitBreaker > 3000) {
				requiredLetters = levelDictionaries[currentLayout]['lvl'+currentLevel].split('');
			}
		}
	}else {
		// if there are no words with the required letters, all words should be set to the
		// current list of required letters
		for(let i = 0; i < scoreMax; i++) {
			str+= levelDictionaries[currentLayout]['lvl'+currentLevel] + ' ';
		}
	}
	return str;
}

// takes an array and removes any required letters that are found in 'word'
// for example, if required letters == ['a', 'b', 'c', 'd'] and word=='cat', this
// function will turn requiredLetters into ['b', 'd'] 
function removeIncludedLetters(requiredLetters, word) {
	word.split('').forEach((l)=> {
		if(requiredLetters.includes(l)){
			requiredLetters.splice(requiredLetters.indexOf(l),1);
			// console.log('removal: '+ word+ ' ' + l + ' '+ requiredLetters);
		}
	});
}

// if 'word' contains an uppercase letter, return true. Else return false
function containsUpperCase(word) {
	let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let result = false;
	word.split('').forEach((letter)=> {
		if(upperCase.includes(letter)) {
			// console.log('upperCase ' + letter);
			result = true;
		}
	});
	return result;
}

// updates the correct answer and manipulates the dom
// called every time a correct word is typed
// RENAME THIS PLEASE. Function name not representative of what it does
function generateRandomPrompt() {
	// make sure no 'incorrect' styling still exists
	input.style.color = 'black';


	// update display
	prompt.style.left = '-' + promptOffset+ 'px';
	let cur = document.querySelector('#id' + (score+1));
	if(score >= 0) {
		document.querySelector('#id' + (score)).style.opacity = '0';
	}
	promptOffset += cur.offsetWidth;

	// save the correct answer to a variable before removing it 
	// from the answer string
	correctAnswer = answerString.split(' ')[0];

	//remove the first word from the answer string
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

// set the word list for each level
function createTestSets(){
	let objKeys = Object.keys(wordLists);
	let testSet = ''; // the list of letters to be included in each level

	// for each level, add new letters to the test set and create a new list
	for(let i = 0; i < objKeys.length; i++) {
		testSet += letterDictionary[objKeys[i]];
		wordLists[objKeys[i]] = generateList(testSet, levelDictionaries[currentLayout]['lvl'+(i+1)]);
	}
}


/*_________________________________________________________*/
/*remaps keystroke input  and keeps track of score. Have funn!!!!*/
/*_________________________________________________________*/



// key remapping
input.addEventListener('keydown', (e)=> {
	// this is the actual character typed by the user
	let char = e.code;
	let finalInput;

	// prevent default char from being typed and replace new char from keyboard map
	if (mapping) {
		if(char in keyboardMap && gameOn) {
			e.preventDefault();
			if(!e.shiftKey) {
				finalInput = keyboardMap[char];
				input.value += keyboardMap[char];
			}else {
			// if shift key is pressed, get final input from
			// keymap shift layer. If shiftlayer doesn't exist
			// use a simple toUpperCase
				if(keyboardMap.shiftLayer == 'default'){
					finalInput = keyboardMap[char].toUpperCase();
					input.value += keyboardMap[char].toUpperCase();
				}else {
					// get char from shiftLayer
					finalInput = keyboardMap.shiftLayer[char];
					input.value += keyboardMap.shiftLayer[char];
				}
			}
		}
	}else {
		finalInput = e.key;
	}

	// keep track of wrong keystrokes
	// console.log('expected: ' + correctAnswer.charAt(letterIndex));
	// console.log('actual: ' + finalInput);

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

	// console.log('score: ' + correct + ' / ' + (correct + errors));

	letterIndex++;
});


document.addEventListener('keyup', (e)=> {
	e.preventDefault();
	//console.log('prevented');

});




