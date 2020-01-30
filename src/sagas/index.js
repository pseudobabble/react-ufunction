import { put, call, select, takeLatest, takeEvery} from 'redux-saga/effects'
import get from 'axios'

function* getImages() {
  try {
    const pageNumber = (Math.floor(Math.random() * Math.floor(9))) + 1;
    const limit = 50;
    const images = yield call(get, `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`);
    yield put({type: 'images/get/success', images: images.data});
  } catch (error) {
    yield put({type: 'images/get/fail', error: error});
  }
}

function* stateLogger(action) {
  const state = yield select();
  console.log('action', action);
  console.log('state after', state);

}

function* rootSaga() {
  yield takeLatest('images/get', getImages);
  yield takeEvery('*', stateLogger);
}

export default rootSaga
