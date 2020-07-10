var keyboardDivs = `
	<div class=row>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key"><span class="letter"></span></div>
		<div class="key big"><span class="letter"></span></div>
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
		<div class="key lvl1" id='KeyA'><span class="letter"></span></div>
		<div class="key lvl1" id='KeyS'><span class="letter"></span></div>
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
	</div>
	<div class=row>
		<div class="cKey bigger"><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyA'><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyS'><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyD'><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyF'><span class="letter"></span></div>
		<div class="cKey lvl2" id='KeyG'><span class="letter"></span></div>
		<div class="cKey lvl2" id='KeyH'><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyJ'><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyK'><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyL'><span class="letter"></span></div>
		<div class="cKey lvl1" id='Semicolon'><span class="letter"></span></div>
		<div class="cKey" id='Quote'><span class="letter"></span></div>
		<div class="cKey bigger"><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey biggest"><span class="letter"></span></div>
		<div class="cKey" id='KeyZ'><span class="letter"></span></div>
		<div class="cKey lvl6" id='KeyX'><span class="letter"></span></div>
		<div class="cKey lvl6" id='KeyC'><span class="letter"></span></div>
		<div class="cKey lvl4" id='KeyV'><span class="letter"></span></div>
		<div class="cKey lvl4" id='KeyB'><span class="letter"></span></div>
		<div class="cKey lvl4" id='KeyN'><span class="letter"></span></div>
		<div class="cKey lvl4" id='KeyM'><span class="letter"></span></div>
		<div class="cKey lvl5" id='Comma'><span class="letter"></span></div>
		<div class="cKey lvl6" id='Period'><span class="letter"></span></div>
		<div class="cKey lvl6" id='Slash'><span class="letter"></span></div>
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
	</div>
	<div class=row>
		<div class="cKey bigger"><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyA'><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyS'><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyD'><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyF'><span class="letter"></span></div>
		<div class="cKey lvl2" id='KeyG'><span class="letter"></span></div>
		<div class="cKey lvl2" id='KeyH'><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyJ'><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyK'><span class="letter"></span></div>
		<div class="cKey lvl1" id='KeyL'><span class="letter"></span></div>
		<div class="cKey lvl1" id='Semicolon'><span class="letter"></span></div>
		<div class="cKey" id='Quote'><span class="letter"></span></div>
		<div class="cKey bigger"><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey biggest"><span class="letter"></span></div>
		<div class="cKey" id='KeyZ'><span class="letter"></span></div>
		<div class="cKey lvl6" id='KeyX'><span class="letter"></span></div>
		<div class="cKey lvl6" id='KeyC'><span class="letter"></span></div>
		<div class="cKey lvl4" id='KeyV'><span class="letter"></span></div>
		<div class="cKey lvl4" id='KeyB'><span class="letter"></span></div>
		<div class="cKey lvl4" id='KeyN'><span class="letter"></span></div>
		<div class="cKey lvl4" id='KeyM'><span class="letter"></span></div>
		<div class="cKey lvl5" id='Comma'><span class="letter"></span></div>
		<div class="cKey lvl6" id='Period'><span class="letter"></span></div>
		<div class="cKey lvl6" id='Slash'><span class="letter"></span></div>
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










