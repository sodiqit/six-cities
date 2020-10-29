import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RoomCardList from 'components/RoomCardList/RoomCardList';
import Map from 'components/Map/Map';
import Menu from 'components/Menu/Menu';
import { RootState } from 'store';
import { loadRooms } from 'store/room/actions';

export const App: FC = React.memo(() => {
  const rooms = useSelector((state: RootState) => state.rooms.rooms);
  const city = useSelector((state: RootState) => state.rooms.city);
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
                {rooms.length} places to stay in {city}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select" />
                  </svg>
                </span>
                <ul
                  role="menu"
                  className="places__options places__options--custom places__options--opened"
                >
                  <li
                    role="menuitem"
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li role="menuitem" className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li role="menuitem" className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li role="menuitem" className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
                {/**  <select className="places__sorting-type" id="places-sorting">
                <option className="places__option" value="popular" selected="">Popular</option>
                <option className="places__option" value="to-high">Price: low to high</option>
                <option className="places__option" value="to-low">Price: high to low</option>
                <option className="places__option" value="top-rated">Top rated first</option>
                </select> * */}
              </form>
              {isLoading ? (
                <div>Loading rooms...</div>
              ) : (
                <RoomCardList onChangeActiveRoom={handleChangeActiveRoom} rooms={rooms} />
              )}
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  cityCoordinate={cityCoordinate}
                  activeRoomId={activeRoomId}
                  roomsInfo={roomsCoordinates}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
});
