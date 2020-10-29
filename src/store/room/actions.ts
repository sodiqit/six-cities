import { CityName, Room } from 'services/types';
import {
  ActionsType,
  ChangeCityAction,
  LoadAction,
  LoadFailAction,
  LoadSuccessAction,
} from './types';

const changeCity = (city: CityName): ChangeCityAction => ({
  type: ActionsType.CHANGE_CITY,
  payload: city,
});

const loadRooms = (): LoadAction => ({
  type: ActionsType.LOAD_ROOMS,
});

const loadRoomsSuccess = (rooms: Room[]): LoadSuccessAction => ({
  type: ActionsType.LOAD_ROOMS_SUCCESS,
  payload: rooms,
});

const loadRoomsFail = (error: string): LoadFailAction => ({
  type: ActionsType.LOAD_ROOMS_FAIL,
  payload: error,
});

export { changeCity, loadRoomsSuccess, loadRoomsFail, loadRooms };
