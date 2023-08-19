import * as constant from '../../constants/index';

const setCurrentPlayer = (payload) => ({
	type: constant.SET_CURRENT_PLAYER,
	payload,
});

export default setCurrentPlayer;
