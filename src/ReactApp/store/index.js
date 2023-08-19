import { legacy_createStore as createStore } from 'redux';
import fieldReducer from './reducers/field-reducer';

export const store = createStore(fieldReducer);
