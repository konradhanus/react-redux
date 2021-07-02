import * as sagas from './rootSaga';

export default function initSagas(sagaMiddleware){
    Object.keys(sagas).map(key => { 
        //console.log(sagas[key]);
        return sagas[key];}).forEach(sagaMiddleware.run);
}
