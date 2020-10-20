/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Offer } from 'mocks/offers';
import { getParent } from 'utils/get-parent';
import { RoomCard } from '../RoomСard/RoomСard';

const handleMouseEnter = (evt: React.MouseEvent) => {
  const target = evt.target as HTMLElement;
  console.log(getParent(target, 'place-card'));
};

export const App = (props: { rooms: Offer[] }): JSX.Element => {
  const { rooms } = props;

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
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
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
              <div className="cities__places-list places__list tabs__content">
                {rooms.map((room) => {
                  return (
                    <RoomCard key={room.id} room={room} onMouseEnter={handleMouseEnter} />
                  );
                })}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
