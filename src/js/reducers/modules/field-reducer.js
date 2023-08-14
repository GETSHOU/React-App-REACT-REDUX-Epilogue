import * as constant from '../../constants/index';

export const defaultState_Field = {
	field: constant.DEFAULT_STATE_FIELD,
};

export const fieldReducer = (state = defaultState_Field, action) => {
	const { type, payload } = action;

	switch (type) {
		case constant.SET_FIELD:
			return {
				...state,
				field: payload,
			};
		case constant.RESET_FIELD:
			return defaultState_Field;
		default:
			return state;
	}
};
