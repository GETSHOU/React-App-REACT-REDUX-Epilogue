import { combineReducers, legacy_createStore as createStore } from 'redux';
// import {
// 	fieldReducer,
// 	moveStatusReducer,
// 	setCurrentPlayerReducer,
// } from '../js/reducers/index';

import { reducer } from '../js/reducers/index';

// В компонентах к данным теперь нужно обращаться следующим образом: fieldState.field, где "fieldState" - ключ в возвращаемом combineReducers объекте, а "field" - ключ в объекте со значениями по-умолчанию, находящийся в файлах редьюсеров.
// const reducer = combineReducers({
// 	fieldState: fieldReducer,
// 	moveStatusState: moveStatusReducer,
// 	currentPlayerState: setCurrentPlayerReducer,
// });

export const store = createStore(reducer);
