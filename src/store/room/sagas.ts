import { put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import Api from 'services/api';
import { loadRoomsSuccess, loadRoomsFail } from './actions';
import { ActionsType } from './types';

function* fetchRooms(): SagaIterator | null {
  try {
    const rooms = yield Api.getRooms();
    if (rooms) {
      yield put(loadRoomsSuccess(rooms));
    } else {
      yield put(loadRoomsFail('Something was wrong'));
    }
  } catch (error) {
    yield put(loadRoomsFail(error.message));
  }
}

function* roomsSaga(): SagaIterator {
  yield takeLatest(ActionsType.LOAD_ROOMS, fetchRooms);
}

export default roomsSaga;
