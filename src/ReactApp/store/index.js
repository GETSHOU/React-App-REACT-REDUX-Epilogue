import { legacy_createStore as createStore } from 'redux';
import fieldReducer from './reducers/index';

export const store = createStore(fieldReducer);
