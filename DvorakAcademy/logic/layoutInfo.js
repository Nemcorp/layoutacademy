var alphabet = 'abcdefghijklmnopqrstuvwxyz';

levelDictionaries = {
	dvorak : {
		'lvl1' : 'aoeuhtns',
		'lvl2' : 'id',
		'lvl3' : 'pyfg',
		'lvl4' : 'kxbm',
		'lvl5' : 'crlw',
		'lvl6' : 'qjvz',
		'lvl7' : alphabet,
	},
	colemak : {
		'lvl1' : 'arstneio',
		'lvl2' : 'dh',
		'lvl3' : 'pgjl',
		'lvl4' : 'cvbk',
		'lvl5' : 'wfuy',
		'lvl6' : 'qzxm',
		'lvl7' : alphabet,
	},
	colemakdh : {
		'lvl1' : 'arstneio',
		'lvl2' : 'gk',
		'lvl3' : 'pbjl',
		'lvl4' : 'cdvm',
		'lvl5' : 'wfuy',
		'lvl6' : 'qzxh',
		'lvl7' : alphabet,
	},
	colemakdhm : {
		'lvl1' : 'arstneio',
		'lvl2' : 'gm',
		'lvl3' : 'pbjl',
		'lvl4' : 'cdvk',
		'lvl5' : 'wfuy',
		'lvl6' : 'qzxh',
		'lvl7' : alphabet,
	},
	qwerty : {
		'lvl1' : 'asdfjkl',
		'lvl2' : 'gh',
		'lvl3' : 'rtyu',
		'lvl4' : 'iope',
		'lvl5' : 'cvbnm',
		'lvl6' : 'zxqw',
		'lvl7' : alphabet,
	},
	workman : {
		'lvl1' : 'ashtneoi',
		'lvl2' : 'gy',
		'lvl3' : 'bjfu',
		'lvl4' : 'mcvk',
		'lvl5' : 'plzx',
		'lvl6' : 'qdrw',
		'lvl7' : alphabet,
	},	
	custom : {
		'lvl1' : '',
		'lvl2' : '',
		'lvl3' : '',
		'lvl4' : '',
		'lvl5' : '',
		'lvl6' : '',
		'lvl7' : alphabet,
	},

}



var layoutMaps = {
	dvorak : {
		'KeyQ' : "'",
		'KeyW' : ',',
		'KeyE' : '.',
		'KeyR' : 'p',
		'KeyT' : 'y',
		'KeyY' : 'f',
		'KeyU' : 'g',
		'KeyI' : 'c',
		'KeyO' : 'r',
		'KeyP' : 'l',
		'BracketLeft' : '/',
		'KeyA' : 'a',
		'KeyS' : 'o',
		'KeyD' : 'e',
		'KeyF' : 'u',
		'KeyG' : 'i',
		'KeyH' : 'd',
		'KeyJ' : 'h',
		'KeyK' : 't',
		'KeyL' : 'n',
		'Semicolon' : 's',
		'KeyZ' : ';',
		'KeyX' : 'q',
		'KeyC' : 'j',
		'KeyV' : 'k',
		'KeyB' : 'x',
		'KeyN' : 'b',
		'KeyM' : 'm',
		'Comma' : 'w',
		'Period' : 'v',
		'Slash' : 'z',
		'shiftLayer' : {
					'KeyQ' : "\"",
					'KeyW' : '<',
					'KeyE' : '>',
					'KeyR' : 'P',
					'KeyT' : 'Y',
					'KeyY' : 'F',
					'KeyU' : 'G',
					'KeyI' : 'C',
					'KeyO' : 'R',
					'KeyP' : 'L',
					'BracketLeft' : '?',
					'KeyA' : 'A',
					'KeyS' : 'O',
					'KeyD' : 'E',
					'KeyF' : 'U',
					'KeyG' : 'I',
					'KeyH' : 'D',
					'KeyJ' : 'H',
					'KeyK' : 'T',
					'KeyL' : 'N',
					'Semicolon' : 'S',
					'KeyZ' : ':',
					'KeyX' : 'Q',
					'KeyC' : 'J',
					'KeyV' : 'K',
					'KeyB' : 'X',
					'KeyN' : 'B',
					'KeyM' : 'M',
					'Comma' : 'W',
					'Period' : 'V',
					'Slash' : 'Z',
				}
	},
	colemak : {
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
		'Slash' : '/',
		'shiftLayer' : 'default',
	}, 
	colemakdh : {
		'KeyQ' : "q",
		'KeyW' : 'w',
		'KeyE' : 'f',
		'KeyR' : 'p',
		'KeyT' : 'b',
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
		'KeyG' : 'g',
		'KeyH' : 'k',
		'KeyJ' : 'n',
		'KeyK' : 'e',
		'KeyL' : 'i',
		'Semicolon' : 'o',
		'KeyZ' : 'z',
		'KeyX' : 'x',
		'KeyC' : 'c',
		'KeyV' : 'd',
		'KeyB' : 'v',
		'KeyN' : 'm',
		'KeyM' : 'h',
		'Comma' : ',',
		'Period' : '.',
		'Slash' : '/',
		'shiftLayer' : 'default',
	}, 
	colemakdhm : {
		'KeyQ' : "q",
		'KeyW' : 'w',
		'KeyE' : 'f',
		'KeyR' : 'p',
		'KeyT' : 'b',
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
		'KeyG' : 'g',
		'KeyH' : 'm',
		'KeyJ' : 'n',
		'KeyK' : 'e',
		'KeyL' : 'i',
		'Semicolon' : 'o',
		'KeyZ' : 'z',
		'KeyX' : 'x',
		'KeyC' : 'c',
		'KeyV' : 'd',
		'KeyB' : 'v',
		'KeyN' : 'k',
		'KeyM' : 'h',
		'Comma' : ',',
		'Period' : '.',
		'Slash' : '/',
		'shiftLayer' : 'default',
	}, 
	qwerty : {
		'KeyQ' : "q",
		'KeyW' : 'w',
		'KeyE' : 'e',
		'KeyR' : 'r',
		'KeyT' : 't',
		'KeyY' : 'y',
		'KeyU' : 'u',
		'KeyI' : 'i',
		'KeyO' : 'o',
		'KeyP' : 'p',
		'BracketLeft' : '[',
		'KeyA' : 'a',
		'KeyS' : 's',
		'KeyD' : 'd',
		'KeyF' : 'f',
		'KeyG' : 'g',
		'KeyH' : 'h',
		'KeyJ' : 'j',
		'KeyK' : 'k',
		'KeyL' : 'l',
		'Semicolon' : ';',
		'KeyZ' : 'z',
		'KeyX' : 'x',
		'KeyC' : 'c',
		'KeyV' : 'v',
		'KeyB' : 'b',
		'KeyN' : 'n',
		'KeyM' : 'm',
		'Comma' : ',',
		'Period' : '.',
		'Slash' : '/',
		'shiftLayer' : 'default',
	},
	workman : {
		'KeyQ' : "q",
		'KeyW' : 'd',
		'KeyE' : 'r',
		'KeyR' : 'w',
		'KeyT' : 'b',
		'KeyY' : 'j',
		'KeyU' : 'f',
		'KeyI' : 'u',
		'KeyO' : 'p',
		'KeyP' : ';',
		'BracketLeft' : '[',
		'KeyA' : 'a',
		'KeyS' : 's',
		'KeyD' : 'h',
		'KeyF' : 't',
		'KeyG' : 'g',
		'KeyH' : 'y',
		'KeyJ' : 'n',
		'KeyK' : 'e',
		'KeyL' : 'o',
		'Semicolon' : 'i',
		'KeyZ' : 'z',
		'KeyX' : 'x',
		'KeyC' : 'm',
		'KeyV' : 'c',
		'KeyB' : 'v',
		'KeyN' : 'k',
		'KeyM' : 'l',
		'Comma' : ',',
		'Period' : '.',
		'Slash' : '/',
		'shiftLayer' : 'default',
	},
	custom : {
		'KeyQ' : " ",
		'KeyW' : ' ',
		'KeyE' : ' ',
		'KeyR' : ' ',
		'KeyT' : ' ',
		'KeyY' : ' ',
		'KeyU' : ' ',
		'KeyI' : ' ',
		'KeyO' : ' ',
		'KeyP' : ' ',
		'BracketLeft' : ' ',
		'KeyA' : ' ',
		'KeyS' : ' ',
		'KeyD' : ' ',
		'KeyF' : ' ',
		'KeyG' : ' ',
		'KeyH' : ' ',
		'KeyJ' : ' ',
		'KeyK' : ' ',
		'KeyL' : ' ',
		'Semicolon' : ' ',
		'KeyZ' : ' ',
		'KeyX' : ' ',
		'KeyC' : ' ',
		'KeyV' : ' ',
		'KeyB' : ' ',
		'KeyN' : ' ',
		'KeyM' : ' ',
		'Comma' : ' ',
		'Period' : ' ',
		'Slash' : ' ',
		'shiftLayer' : {
			'KeyQ' : ' ',
			'KeyW' : ' ',
			'KeyE' : ' ',
			'KeyR' : ' ',
			'KeyT' : ' ',
			'KeyY' : ' ',
			'KeyU' : ' ',
			'KeyI' : ' ',
			'KeyO' : ' ',
			'KeyP' : ' ',
			'BracketLeft' : ' ',
			'KeyA' : ' ',
			'KeyS' : ' ',
			'KeyD' : ' ',
			'KeyF' : ' ',
			'KeyG' : ' ',
			'KeyH' : ' ',
			'KeyJ' : ' ',
			'KeyK' : ' ',
			'KeyL' : ' ',
			'Semicolon' : ' ',
			'KeyZ' : ' ',
			'KeyX' : ' ',
			'KeyC' : ' ',
			'KeyV' : ' ',
			'KeyB' : ' ',
			'KeyN' : ' ',
			'KeyM' : ' ',
			'Comma' : ' ',
			'Period' : ' ',
			'Slash' : ' ',
		},
	},
}