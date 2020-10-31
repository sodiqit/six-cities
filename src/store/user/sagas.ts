import { put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import Api from 'services/api';
import { userSignInSuccessAction } from './actions';
import { UserActionTypes, UserSignInAction } from './types';

function* signInUser(action: UserSignInAction): SagaIterator | null {
  try {
    const email = yield Api.signIn(action.payload);
    yield put(userSignInSuccessAction(email));
  } catch (error) {
    console.log(error);
  }
}

function* checkUser(): SagaIterator | null {
  try {
    const email = yield Api.isAuth();
    yield put(userSignInSuccessAction(email));
  } catch (error) {
    console.log(error);
  }
}

function* userSaga(): SagaIterator {
  yield takeLatest(UserActionTypes.LOGIN_USER, signInUser);
  yield takeLatest(UserActionTypes.CHECK_USER, checkUser);
}

export default userSaga;
