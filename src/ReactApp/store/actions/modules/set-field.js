import * as constant from '../../constants/index';

const setField = (payload) => ({
	type: constant.SET_FIELD,
	payload,
});

export default setField;
