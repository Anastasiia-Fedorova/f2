import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import { watcherSaga } from './saga';
import {promiseReducer} from './reducers/promiseReducer'
import {authReducer, authWatcher} from './reducers/authReducer'


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers({authReducer, promiseReducer}), applyMiddleware(sagaMiddleware));


function* rootSaga(){ 
    yield all([ 
         watcherSaga(),
         authWatcher(),
    ])
}

sagaMiddleware.run(rootSaga);