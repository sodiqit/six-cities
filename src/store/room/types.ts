import { CityName, Room } from 'services/types';

enum ActionsType {
  CHANGE_CITY = 'rooms/CHANGE_CITY',
  LOAD_ROOMS_SUCCESS = 'rooms/LOAD_ROOMS_SUCCESS',
  LOAD_ROOMS_FAIL = 'rooms/LOAD_ROOMS_FAIL',
  LOAD_ROOMS = 'rooms/LOAD_ROOMS',
}

type RoomsState = {
  isLoading: boolean;
  error: null | string;
  city: CityName;
  rooms: Room[];
  cities: CityName[];
};

type ChangeCityAction = {
  type: ActionsType.CHANGE_CITY;
  payload: CityName;
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

type RoomsActions = ChangeCityAction | LoadSuccessAction | LoadFailAction;

export { ActionsType };
export type {
  RoomsState,
  ChangeCityAction,
  LoadAction,
  LoadSuccessAction,
  LoadFailAction,
  RoomsActions,
};
