import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    reducers,composeWithDevTools(applyMiddleware())
    // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  export default store;