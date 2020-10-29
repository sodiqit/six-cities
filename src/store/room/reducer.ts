import { RoomsState, ActionsType, SortTypes, RoomsActions } from './types';

const initialState: RoomsState = {
  error: null,
  isLoading: true,
  city: 'Amsterdam',
  rooms: [],
  cities: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
  sortType: SortTypes.POPULAR,
};

const reducer = (state = initialState, action: RoomsActions): RoomsState => {
  switch (action.type) {
    case ActionsType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionsType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionsType.LOAD_ROOMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rooms: action.payload,
      };
    case ActionsType.LOAD_ROOMS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
