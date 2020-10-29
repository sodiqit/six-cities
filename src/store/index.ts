import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createMiddleware from 'redux-saga';
import roomsSaga from './room/sagas';
import roomsReducer from './room/reducer';
// — https://htmlacademy-react-2.appspot.com/six-cities

type RootState = ReturnType<typeof reducer>;

const reducer = combineReducers({
  rooms: roomsReducer,
});

const sagaMiddleware = createMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(roomsSaga);

export { store };
export type { RootState };
