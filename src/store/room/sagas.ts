import { put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { loadRoomsSuccess, loadRoomsFail } from './actions';
import { ActionsType } from './types';

function* fetchRooms(): SagaIterator | null {
  try {
    const response = yield fetch(
      'https://htmlacademy-react-2.appspot.com/six-cities/hotels',
    );
    const rooms = yield response.json();
    yield put(loadRoomsSuccess(rooms));
  } catch (error) {
    yield put(loadRoomsFail(error));
  }
}

function* roomsSaga(): SagaIterator {
  yield takeLatest(ActionsType.LOAD_ROOMS, fetchRooms);
}

export default roomsSaga;
