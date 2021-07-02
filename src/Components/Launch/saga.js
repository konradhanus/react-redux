import { all, takeEvery, fork, put, delay, call} from '@redux-saga/core/effects';
import { LAUNCH_RUN }  from './action';
import { actionCreator} from './../Test/action';
import fetch from 'isomorphic-fetch';

function* onLauchSaga(action){
   const dogResponse = yield fetch('https://dog.ceo/api/breeds/image/random');
   const response = yield dogResponse.json();
   console.log(response);
   yield put(actionCreator.increment());

}

export function* lauchSaga() {
    yield takeEvery(LAUNCH_RUN, onLauchSaga);
}


export function* allSagas()
{
    yield all([fork(lauchSaga)])
}