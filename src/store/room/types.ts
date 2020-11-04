import { CityName, Room } from 'services/types';

enum ActionsType {
  CHANGE_CITY = 'rooms/CHANGE_CITY',
  CHANGE_SORT_TYPE = 'rooms/CHANGE_SORT_TYPE',
  LOAD_ROOMS_SUCCESS = 'rooms/LOAD_ROOMS_SUCCESS',
  LOAD_ROOMS_FAIL = 'rooms/LOAD_ROOMS_FAIL',
  LOAD_ROOMS = 'rooms/LOAD_ROOMS',
  UPDATE_ROOM = 'rooms/UPDATE_ROOM',
}

enum SortTypes {
  POPULAR = 'Popular',
  TO_HIGH = 'Price: low to high',
  TO_LOW = 'Price: high to low',
  TOP_RATED = 'Top rated first',
}

type RoomsState = {
  isLoading: boolean;
  error: null | string;
  city: CityName;
  rooms: Room[];
  cities: CityName[];
  sortType: Partial<SortTypes>;
};

type ChangeCityAction = {
  type: ActionsType.CHANGE_CITY;
  payload: CityName;
};

type ChangeSortTypeAction = {
  type: ActionsType.CHANGE_SORT_TYPE;
  payload: Partial<SortTypes>;
};

type LoadAction = {
  type: ActionsType.LOAD_ROOMS;
};

type LoadSuccessAction = {
  type: ActionsType.LOAD_ROOMS_SUCCESS;
  payload: Room[];
};

type LoadFailAction = {
  type: ActionsType.LOAD_ROOMS_FAIL;
  payload: string;
};

type UpdateRoomAction = {
  type: ActionsType.UPDATE_ROOM;
  payload: { id: number; isFavorite: boolean };
};

type RoomsActions =
  | ChangeCityAction
  | LoadSuccessAction
  | LoadFailAction
  | LoadAction
  | ChangeSortTypeAction
  | UpdateRoomAction;

export { ActionsType, SortTypes };
export type {
  RoomsState,
  ChangeCityAction,
  ChangeSortTypeAction,
  LoadAction,
  LoadSuccessAction,
  LoadFailAction,
  UpdateRoomAction,
  RoomsActions,
};
