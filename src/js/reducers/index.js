// export { fieldReducer } from '../reducers/modules/field-reducer';
// export { moveStatusReducer } from '../reducers/modules/move-status-reducer';
// export { setCurrentPlayerReducer } from '../reducers/modules/set-current-player-reducer';

import * as constant from '../constants/index';

const defaultState = {
	field: constant.DEFAULT_STATE_FIELD,
	moveStatus: constant.STATUS_MOVES,
	currentPlayer: constant.FIRST_PLAYER,
};

export const reducer = (state = defaultState, action) => {
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
			return defaultState;
		default:
			return state;
	}
};
