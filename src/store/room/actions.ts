import { CityName, Room } from 'services/types';
import {
  ActionsType,
  ChangeCityAction,
  ChangeSortTypeAction,
  LoadAction,
  LoadFailAction,
  LoadSuccessAction,
  UpdateRoomAction,
  SortTypes,
} from './types';

const changeCity = (city: CityName): ChangeCityAction => ({
  type: ActionsType.CHANGE_CITY,
  payload: city,
});

const changeSortType = (sortType: Partial<SortTypes>): ChangeSortTypeAction => ({
  type: ActionsType.CHANGE_SORT_TYPE,
  payload: sortType,
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

const updateRoom = (data: { id: number; isFavorite: boolean }): UpdateRoomAction => ({
  type: ActionsType.UPDATE_ROOM,
  payload: data,
});

export {
  changeCity,
  changeSortType,
  loadRoomsSuccess,
  loadRoomsFail,
  loadRooms,
  updateRoom,
};
