import * as constant from '../../constants/index';

export const defaultState_MoveStatus = {
	moveStatus: constant.STATUS_MOVES,
};

export const moveStatusReducer = (state = defaultState_MoveStatus, action) => {
	const { type, payload } = action;

	switch (type) {
		case constant.SET_MOVE_STATUS:
			return {
				...state,
				moveStatus: payload,
			};
		default:
			return state;
	}
};
