import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {promiseWatcher, watcherSaga } from './saga';
import {promiseReducer} from './reducers/promiseReducer'
import {authReducer} from './reducers/authReducer'


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers({authReducer, promiseReducer}), applyMiddleware(sagaMiddleware));


function* rootSaga(){ 
    yield all([ 
         watcherSaga(),
        //promiseWatcher()
    ])
}

sagaMiddleware.run(rootSaga);