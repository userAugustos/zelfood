import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import  foodReducer from './Reducers/reducer';
import { rootSaga } from './Saga/sagas'; 

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    foodAdder: foodReducer
})

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;