import {createStore, combineReducers, applyMiddleware} from 'redux';
import LoaderReducer from './reducers/loader.reducer';
import thunk from 'redux-thunk';


const store = createStore(
    combineReducers({
        loaderReducer: LoaderReducer
    }), applyMiddleware(thunk)
);


export default store;