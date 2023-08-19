import * as constant from '../constants/index';

const initialState = {
	field: constant.DEFAULT_STATE_FIELD,
	moveStatus: constant.STATUS_MOVES,
	currentPlayer: constant.FIRST_PLAYER,
};

const fieldReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case constant.SET_FIELD:
			return {
				...state,
				field: payload,
			};
		case constant.SET_MOVE_STATUS:
			return {
				...state,
				moveStatus: payload,
			};
		case constant.SET_CURRENT_PLAYER:
			return {
				...state,
				currentPlayer: payload,
			};
		case constant.RESET_FIELD:
			return initialState;
		default:
			return state;
	}
};

export default fieldReducer;
