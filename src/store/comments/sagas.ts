import { put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import Api from 'services/api';
import { loadCommentsSuccess, loadCommentsFail } from './actions';
import { CommentsActionTypes, CommentsLoadAction } from './types';

function* fetchComments(action: CommentsLoadAction): SagaIterator | null {
  try {
    const comments = yield Api.getRoomComments(action.payload);
    if (comments) {
      yield put(loadCommentsSuccess(comments));
    } else {
      yield put(loadCommentsFail('Something was wrong with load comments'));
    }
  } catch (error) {
    yield put(loadCommentsFail(error.message));
  }
}

function* commentsSaga(): SagaIterator {
  yield takeLatest(CommentsActionTypes.LOAD, fetchComments);
}

export default commentsSaga;
