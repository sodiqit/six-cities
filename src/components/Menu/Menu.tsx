import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeCity } from 'store/room/actions';
import { RootState } from 'store';
import { convertFiltersToString, getKeyByValue } from 'utils/convert-filters';
import Location from 'components/Location/Location';

const Menu = () => {
  const { city: activeCity, sortType, cities } = useSelector(
    (state: RootState) => state.rooms,
    shallowEqual,
  );
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => {
        return (
          <li key={city} className="locations__item">
            <Location
              city={city}
              isActive={city === activeCity}
              href="#"
              onClick={() => {
                const key = getKeyByValue(sortType);
                const string = convertFiltersToString({
                  cityName: city,
                  searchType: key,
                });
                dispatch(changeCity(city));
                history.push(`/${string}`);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(Menu);
