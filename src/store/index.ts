import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import roomsSaga from './room/sagas';
import roomsReducer from './room/reducer';
import userReducer from './user/reducer';
import userSaga from './user/sagas';
import commentsReducer from './comments/reducer';
import commentsSaga from './comments/sagas';

type RootState = ReturnType<typeof reducer>;

const reducer = combineReducers({
  rooms: roomsReducer,
  user: userReducer,
  comments: commentsReducer,
});

function* rootSaga() {
  yield fork(roomsSaga);
  yield fork(userSaga);
  yield fork(commentsSaga);
}

const sagaMiddleware = createMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export { store };
export type { RootState };
