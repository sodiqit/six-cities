import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCity } from 'store/actions';
import { State } from 'store/dto';
import { Location } from 'components/MenuButton/Location';

const Menu = () => {
  const activeCity = useSelector((state: State) => state.city);
  const cities = useSelector((state: State) => state.cities);
  const dispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => {
        return (
          <li key={city} className="locations__item">
            <Location
              city={city}
              isActive={city === activeCity}
              href="#"
              onClick={() => dispatch(changeCity(city))}
            />
          </li>
        );
      })}
    </ul>
  );
};

export { Menu };
