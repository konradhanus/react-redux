import { createStore, compose } from 'redux';
import rootReducer from './rootReducer';

// @ts-ignore: REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers();

const configureStore = () => createStore(rootReducer(), middleware);

export default configureStore;
