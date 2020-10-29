import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCity } from 'store/room/actions';
import { RootState } from 'store';
import Location from 'components/Location/Location';

const Menu = () => {
  const activeCity = useSelector((state: RootState) => state.rooms.city);
  const cities = useSelector((state: RootState) => state.rooms.cities);
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

export default React.memo(Menu);
