import * as constant from '../../constants/index';

const setMoveStatus = (payload) => ({
	type: constant.SET_MOVE_STATUS,
	payload,
});

export default setMoveStatus;
