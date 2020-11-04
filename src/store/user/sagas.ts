import { put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import Api from 'services/api';
import { updateRoom } from 'store/room/actions';
import { userSignInSuccessAction } from './actions';
import { UserActionTypes, UserSignInAction, UserFavoriteAction } from './types';

function* signInUser(action: UserSignInAction): SagaIterator | null {
  try {
    const email = yield Api.signIn(action.payload);
    yield put(userSignInSuccessAction(email));
  } catch (error) {
    console.log(error);
  }
}

function* changeFavorite(action: UserFavoriteAction): SagaIterator | null {
  try {
    yield put(updateRoom(action.payload));
    yield Api.changeFavorite(action.payload);
  } catch (error) {
    console.log(error);
  }
}

function* userSaga(): SagaIterator {
  yield takeLatest(UserActionTypes.LOGIN_USER, signInUser);
  yield takeLatest(UserActionTypes.CLICK_FAVORITE, changeFavorite);
}

export default userSaga;
