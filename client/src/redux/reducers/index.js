import {combineReducers} from 'redux';
import { orderReducer } from './CartReducer';

const reducers = combineReducers({
    orderReducer,
});

export default reducers;