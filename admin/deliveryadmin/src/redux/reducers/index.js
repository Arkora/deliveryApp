import {combineReducers} from 'redux';
import {foodsReducer} from './foods';

const reducers = combineReducers({foodsReducer});

export default reducers;