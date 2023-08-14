import * as constant from '../../constants/index';

const setField = (payload) => ({
	type: constant.SET_FIELD,
	payload,
});

const resetField = () => ({
	type: constant.RESET_FIELD,
});

const setMoveStatus = (payload) => ({
	type: constant.SET_MOVE_STATUS,
	payload,
});

const setCurrentPlayer = (payload) => ({
	type: constant.SET_CURRENT_PLAYER,
	payload,
});

export { setField, resetField, setMoveStatus, setCurrentPlayer };
