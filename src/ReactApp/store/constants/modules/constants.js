const FIRST_PLAYER = 'X';
const SECOND_PLAYER = 'O';

const STATUS_WIN = 'Победил: ';
const STATUS_DRAW = 'Ничья!';
const STATUS_MOVES = 'Ходит: ';

const WIN_PATTERNS = [
	[0, 1, 2], // Варианты побед по горизонтали
	[3, 4, 5], // Варианты побед по горизонтали
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6], // Варианты побед по вертикали
	[1, 4, 7], // Варианты побед по вертикали
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8], // Варианты побед по диагонали
	[2, 4, 6], // Варианты побед по диагонали
];

const SET_FIELD = 'SET_FIELD';
const RESET_FIELD = 'RESET_FIELD';
const SET_MOVE_STATUS = 'SET_MOVE_STATUS';
const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
const DEFAULT_STATE_FIELD = new Array(9).fill('');

export {
	SET_FIELD,
	STATUS_WIN,
	RESET_FIELD,
	STATUS_DRAW,
	STATUS_MOVES,
	FIRST_PLAYER,
	WIN_PATTERNS,
	SECOND_PLAYER,
	SET_MOVE_STATUS,
	SET_CURRENT_PLAYER,
	DEFAULT_STATE_FIELD,
};
