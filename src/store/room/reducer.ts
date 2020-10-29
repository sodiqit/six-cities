import { RoomsState, ActionsType, RoomsActions } from './types';

const initialState: RoomsState = {
  error: null,
  isLoading: true,
  city: 'Amsterdam',
  rooms: [],
  cities: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
};

const reducer = (state = initialState, action: RoomsActions): RoomsState => {
  if (action.type === ActionsType.CHANGE_CITY) {
    return {
      ...state,
      city: action.payload,
    };
  }

  if (action.type === ActionsType.LOAD_ROOMS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      rooms: action.payload,
    };
  }

  if (action.type === ActionsType.LOAD_ROOMS_FAIL) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
};

export default reducer;
