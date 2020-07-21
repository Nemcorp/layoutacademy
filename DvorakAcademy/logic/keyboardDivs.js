var keyboardDivs = `
	<div class=row>
		<div class="key" id='Backquote'><span class="letter"></span></div>
		<div class="key" id='Digit1'><span class="letter"></span></div>
		<div class="key" id='Digit2'><span class="letter"></span></div>
		<div class="key" id='Digit3'><span class="letter"></span></div>
		<div class="key" id='Digit4'><span class="letter"></span></div>
		<div class="key" id='Digit5'><span class="letter"></span></div>
		<div class="key" id='Digit6'><span class="letter"></span></div>
		<div class="key" id='Digit7'><span class="letter"></span></div>
		<div class="key" id='Digit8'><span class="letter"></span></div>
		<div class="key" id='Digit9'><span class="letter"></span></div>
		<div class="key" id='Digit0'><span class="letter"></span></div>
		<div class="key" id='Minus'><span class="letter"></span></div>
		<div class="key" id='Equal'><span class="letter"></span></div>
		<div class="key big" id='BackSpace'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="key big"><span class="letter"></span></div>
		<div class="key" id='KeyQ'><span class="letter"></span></div>
		<div class="key" id='KeyW'><span class="letter"></span></div>
		<div class="key" id='KeyE'><span class="letter"></span></div>
		<div class="key lvl3" id='KeyR'><span class="letter"></span></div>
		<div class="key lvl3" id='KeyT'><span class="letter"></span></div>
		<div class="key lvl3" id='KeyY'><span class="letter"></span></div>
		<div class="key lvl3" id='KeyU'><span class="letter"></span></div>
		<div class="key lvl5" id='KeyI'><span class="letter"></span></div>
		<div class="key lvl5" id='KeyO'><span class="letter"></span></div>
		<div class="key lvl5" id='KeyP'><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="key bigger"><span class="letter"></span></div>
		<div class="key lvl1" id='KeyA'><span class="letter"></span></div><div class="key lvl1" id='KeyS'><span class="letter"></span></div>
		<div class="key lvl1" id='KeyD'><span class="letter"></span></div>
		<div class="key lvl1" id='KeyF'><span class="letter"></span></div>
		<div class="key lvl2" id='KeyG'><span class="letter"></span></div>
		<div class="key lvl2" id='KeyH'><span class="letter"></span></div>
		<div class="key lvl1" id='KeyJ'><span class="letter"></span></div>
		<div class="key lvl1" id='KeyK'><span class="letter"></span></div>
		<div class="key lvl1" id='KeyL'><span class="letter"></span></div>
		<div class="key lvl1" id='Semicolon'><span class="letter"></span></div>
		<div class="key" id='Quote'><span class="letter"></span></div>
		<div class="key bigger"><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="key biggest"><span class="letter"></span></div>
		<div class="key" id='KeyZ'><span class="letter"></span></div>
		<div class="key lvl6" id='KeyX'><span class="letter"></span></div>
		<div class="key lvl6" id='KeyC'><span class="letter"></span></div>
		<div class="key lvl4" id='KeyV'><span class="letter"></span></div>
		<div class="key lvl4" id='KeyB'><span class="letter"></span></div>
		<div class="key lvl4" id='KeyN'><span class="letter"></span></div>
		<div class="key lvl4" id='KeyM'><span class="letter"></span></div>
		<div class="key lvl5" id='Comma'><span class="letter"></span></div>
		<div class="key lvl6" id='Period'><span class="letter"></span></div>
		<div class="key lvl6" id='Slash'><span class="letter"></span></div>
		<div class="key biggest"><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key space"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key bigger"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
	</div>
`;

var customLayout = `
	<div class=row>
		<div class="cKey rowStart" id='customBackquote'><span class="letter"></span></div>
		<div class="cKey" id='customDigit1'><span class="letter"></span></div>
		<div class="cKey" id='customDigit2'><span class="letter"></span></div>
		<div class="cKey" id='customDigit3'><span class="letter"></span></div>
		<div class="cKey" id='customDigit4'><span class="letter"></span></div>
		<div class="cKey" id='customDigit5'><span class="letter"></span></div>
		<div class="cKey" id='customDigit6'><span class="letter"></span></div>
		<div class="cKey" id='customDigit7'><span class="letter"></span></div>
		<div class="cKey" id='customDigit8'><span class="letter"></span></div>
		<div class="cKey" id='customDigit9'><span class="letter"></span></div>
		<div class="cKey" id='customDigit0'><span class="letter"></span></div>
		<div class="cKey" id='customMinus'><span class="letter"></span></div>
		<div class="cKey" id='customEqual'><span class="letter"></span></div>
		<div class="cKey big rowEnd" id='customBackSpace'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey big rowStart" id='customTab' ><span class="letter"></span></div>
		<div class="cKey" id='customKeyQ'><span  class="letter"></span></div>
		<div class="cKey" id='customKeyW'><span  class="letter"></span></div>
		<div class="cKey" id='customKeyE'><span  class="letter"></span></div>
		<div class="cKey" id='customKeyR'><span  class="letter"></span></div>
		<div class="cKey" id='customKeyT'><span  class="letter"></span></div>
		<div class="cKey" id='customKeyY'><span  class="letter"></span></div>
		<div class="cKey" id='customKeyU'><span  class="letter"></span></div>
		<div class="cKey" id='customKeyI'><span  class="letter"></span></div>
		<div class="cKey" id='customKeyO'><span  class="letter"></span></div>
		<div class="cKey" id='customKeyP'><span  class="letter"></span></div>
		<div class="cKey" id='customBracketLeft'><span  class="letter"></span></div>
		<div class="cKey" id='customBracketRight'><span  class="letter"></span></div>
		<div class="cKey rowEnd" id='customBackslash'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey bigger rowStart" id='customCapsLock'><span class="letter"></span></div>
		<div class="cKey lvl1" id='customKeyA'>
			<span class="letter"></span>
		</div>
		<div class="cKey lvl1" id='customKeyS'><span class="letter"></span></div>
		<div class="cKey lvl1" id='customKeyD'><span class="letter"></span></div>
		<div class="cKey lvl1" id='customKeyF'><span class="letter"></span></div>
		<div class="cKey lvl2" id='customKeyG'><span class="letter"></span></div>
		<div class="cKey lvl2" id='customKeyH'><span class="letter"></span></div>
		<div class="cKey lvl1" id='customKeyJ'><span class="letter"></span></div>
		<div class="cKey lvl1" id='customKeyK'><span class="letter"></span></div>
		<div class="cKey lvl1" id='customKeyL'><span class="letter"></span></div>
		<div class="cKey lvl1" id='customSemicolon'><span class="letter"></span></div>
		<div class="cKey" id='customQuote'><span class="letter"></span></div>
		<div class="cKey bigger rowEnd" id='customEnter'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey biggest rowStart"><span class="letter"></span></div>
		<div class="cKey" id='customKeyZ'><span class="letter"></span></div>
		<div class="cKey lvl6" id='customKeyX'><span class="letter"></span></div>
		<div class="cKey lvl6" id='customKeyC'><span class="letter"></span></div>
		<div class="cKey lvl4" id='customKeyV'><span class="letter"></span></div>
		<div class="cKey lvl4" id='customKeyB'><span class="letter"></span></div>
		<div class="cKey lvl4" id='customKeyN'><span class="letter"></span></div>
		<div class="cKey lvl4" id='customKeyM'><span class="letter"></span></div>
		<div class="cKey lvl5" id='customComma'><span class="letter"></span></div>
		<div class="cKey lvl6" id='customPeriod'><span class="letter"></span></div>
		<div class="cKey lvl6" id='customSlash'><span class="letter"></span></div>
		<div class="cKey biggest rowEnd finalKey"><span class="letter"></span></div>
	</div>
	<div class='row'>
		<div class="cKey rowStart"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey space"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey bigger"><span class="letter"></span></div>
		<div class="cKey rowEnd"><span class="letter"></span></div>
	</div>
`;


var customShiftLayout = `
	<div class=row>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey big"><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey big"><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomKeyQ'><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomKeyW'><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomKeyE'><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomKeyR'><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomKeyT'><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomKeyY'><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomKeyU'><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomKeyI'><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomKeyO'><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomKeyP'><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomBracketLeft'><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomBracketRight'><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey bigger"><span class="letter"></span></div>
		<div class="cKey lvl1" id='shiftcustomKeyA'><span class="letter"></span></div>
		<div class="cKey lvl1" id='shiftcustomKeyS'><span class="letter"></span></div>
		<div class="cKey lvl1" id='shiftcustomKeyD'><span class="letter"></span></div>
		<div class="cKey lvl1" id='shiftcustomKeyF'><span class="letter"></span></div>
		<div class="cKey lvl2" id='shiftcustomKeyG'><span class="letter"></span></div>
		<div class="cKey lvl2" id='shiftcustomKeyH'><span class="letter"></span></div>
		<div class="cKey lvl1" id='shiftcustomKeyJ'><span class="letter"></span></div>
		<div class="cKey lvl1" id='shiftcustomKeyK'><span class="letter"></span></div>
		<div class="cKey lvl1" id='shiftcustomKeyL'><span class="letter"></span></div>
		<div class="cKey lvl1" id='shiftcustomSemicolon'><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomQuote'><span class="letter"></span></div>
		<div class="cKey bigger"><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey biggest"><span class="letter"></span></div>
		<div class="cKey" id='shiftcustomKeyZ'><span class="letter"></span></div>
		<div class="cKey lvl6" id='shiftcustomKeyX'><span class="letter"></span></div>
		<div class="cKey lvl6" id='shiftcustomKeyC'><span class="letter"></span></div>
		<div class="cKey lvl4" id='shiftcustomKeyV'><span class="letter"></span></div>
		<div class="cKey lvl4" id='shiftcustomKeyB'><span class="letter"></span></div>
		<div class="cKey lvl4" id='shiftcustomKeyN'><span class="letter"></span></div>
		<div class="cKey lvl4" id='shiftcustomKeyM'><span class="letter"></span></div>
		<div class="cKey lvl5" id='shiftcustomComma'><span class="letter"></span></div>
		<div class="cKey lvl6" id='shiftcustomPeriod'><span class="letter"></span></div>
		<div class="cKey lvl6" id='shiftcustomSlash'><span class="letter"></span></div>
		<div class="cKey biggest"><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey space"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
		<div class="cKey bigger"><span class="letter"></span></div>
		<div class="cKey"><span class="letter"></span></div>
	</div>
`;










