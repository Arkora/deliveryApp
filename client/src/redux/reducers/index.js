import {combineReducers} from 'redux';
import { productReducer } from './CartReducer';

const reducers = combineReducers({
    productReducer,
});

export default reducers;