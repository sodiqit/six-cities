import React, { useState, useMemo } from 'react';
import type { FC } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useLocation } from 'react-router-dom';

import RoomCardList from 'components/RoomCardList/RoomCardList';
import Map from 'components/Map/Map';
import Menu from 'components/Menu/Menu';
import Sort from 'components/Sort/Sort';

import { CityName } from 'services/types';
import { RootState } from 'store';
import { changeCity, changeSortType } from 'store/room/actions';
import { SortTypes } from 'store/room/types';
import { sortRooms } from 'utils/sort-rooms';
import { convertStringToFilters, sortsMap } from 'utils/convert-filters';

const Main: FC = () => {
  const { rooms, city, sortType, isLoading, cities } = useSelector(
    (state: RootState) => state.rooms,
    shallowEqual,
  );
  const dispatch = useDispatch();

  const { search } = useLocation();
  const { cityName, searchType } = convertStringToFilters(search);

  const isCorrectCityName =
    city !== cityName && cityName && cities.includes(cityName as CityName);

  const isCorrectSearchType = sortsMap[searchType] !== sortType && searchType;

  if (isCorrectCityName) {
    dispatch(changeCity(cityName as CityName));
  }

  if (isCorrectSearchType) {
    const correctSearchType = sortsMap[searchType] as SortTypes;
    dispatch(changeSortType(correctSearchType));
  }

  const [activeRoomId, setActiveRoomId] = useState(-1);

  const handleChangeActiveRoom = (id: number) => {
    setActiveRoomId(id);
  };

  const roomsCoordinates = rooms.map((room) => {
    const { id, title, location } = room;
    const { latitude, longitude } = location;
    const coordinate = [latitude, longitude] as [number, number];
    return {
      id,
      title,
      coordinate,
    };
  });

  const filteredRooms = useMemo(() => sortRooms(rooms, city, sortType), [
    rooms,
    city,
    sortType,
  ]);

  const cityCoordinate = rooms.find((room) => room.city.name === city)?.city.location;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <Menu />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {filteredRooms.length} places to stay in {city}
            </b>
            <Sort />
            <RoomCardList
              onChangeActiveRoom={handleChangeActiveRoom}
              rooms={filteredRooms}
            />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              {!isLoading && (
                <Map
                  cityCoordinate={cityCoordinate}
                  activeRoomId={activeRoomId}
                  roomsInfo={roomsCoordinates}
                />
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default React.memo(Main);
