import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

// @ts-ignore: REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));

const configureStore = () => createStore(rootReducer(), middleware);

export default configureStore;
