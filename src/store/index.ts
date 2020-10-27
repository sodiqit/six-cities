import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { offers } from 'mocks/offers';
import { State, ActionsType, ChangeCityACtion } from './dto';

const initialState: State = {
  city: 'amsterdam',
  rooms: offers,
};

const reducer = (state = initialState, action: ChangeCityACtion) => {
  if (action.type === ActionsType.CHANGE_CITY) {
    return {
      ...state,
      city: action.payload,
    };
  }

  return state;
};

export const store = createStore(reducer, composeWithDevTools());
