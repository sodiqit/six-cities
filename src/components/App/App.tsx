import React, { useEffect, useState, useMemo } from 'react';
import type { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RoomCardList from 'components/RoomCardList/RoomCardList';
import Map from 'components/Map/Map';
import Menu from 'components/Menu/Menu';
import Sort from 'components/Sort/Sort';
import { RootState } from 'store';
import { loadRooms } from 'store/room/actions';
import { sortRooms } from 'utils/sort-rooms';

export const App: FC = React.memo(() => {
  const rooms = useSelector((state: RootState) => state.rooms.rooms);
  const city = useSelector((state: RootState) => state.rooms.city);
  const sortType = useSelector((state: RootState) => state.rooms.sortType);
  const isLoading = useSelector((state: RootState) => state.rooms.isLoading);
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(loadRooms());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
              {isLoading ? (
                <div>Loading rooms...</div>
              ) : (
                <RoomCardList
                  onChangeActiveRoom={handleChangeActiveRoom}
                  rooms={filteredRooms}
                />
              )}
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
    </div>
  );
});
