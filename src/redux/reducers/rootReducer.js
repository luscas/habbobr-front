import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
	counter: counterReducer,
	modal: modalReducer
});

export default rootReducer;