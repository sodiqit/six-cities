import { Room } from 'services/types';
import { RoomsState, ActionsType, SortTypes, RoomsActions } from './types';

const updateRooms = (
  data: { id: number; isFavorite: boolean },
  rooms: Room[],
): Room[] => {
  const { id, isFavorite } = data;

  const updatedRooms = rooms.map((room) => {
    if (id === room.id) {
      return { ...room, is_favorite: isFavorite };
    }
    return room;
  });

  return updatedRooms;
};

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
    case ActionsType.UPDATE_ROOM:
      return {
        ...state,
        rooms: updateRooms(action.payload, state.rooms),
      };
    default:
      return state;
  }
};

export default reducer;
