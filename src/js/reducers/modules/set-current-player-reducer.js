import * as constant from '../../constants/index';

export const defaultState_CurrentPlayer = {
	currentPlayer: constant.FIRST_PLAYER,
};

export const setCurrentPlayerReducer = (state = defaultState_CurrentPlayer, action) => {
	const { type, payload } = action;

	switch (type) {
		case constant.SET_CURRENT_PLAYER:
			return {
				...state,
				currentPlayer: payload,
			};
		default:
			return state;
	}
};
