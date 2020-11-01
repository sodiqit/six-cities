import React, { FC, useState, useEffect, MouseEvent, KeyboardEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'store';
import { changeSortType } from 'store/room/actions';
import { SortTypes } from 'store/room/types';
import { convertFiltersToString, getKeyByValue } from 'utils/convert-filters';

const Sort: FC = () => {
  const sortType = useSelector((state: RootState) => state.rooms.sortType);
  const city = useSelector((state: RootState) => state.rooms.city);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isOpened, setOpened] = useState(false);

  const handleEvent = () => {
    setOpened(!isOpened);
  };

  useEffect(() => {
    const closeSortMenu = (evt: Event) => {
      const target = evt.target as HTMLElement;
      if (
        target.classList.contains('places__sorting-type') ||
        target.classList.contains('places__option')
      ) {
        return;
      }
      setOpened(false);
    };
    document.addEventListener('click', closeSortMenu);

    return () => {
      document.removeEventListener('click', closeSortMenu);
    };
  }, []);

  const handleMenuEvent = (evt: MouseEvent | KeyboardEvent) => {
    const target = evt.target as HTMLElement;
    const value = target.textContent as SortTypes | null;

    if (value) {
      const key = getKeyByValue(value);
      const urlString = convertFiltersToString({
        cityName: city,
        searchType: key,
      });
      dispatch(changeSortType(value));
      history.push(`/${urlString}`);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        tabIndex={0}
        role="button"
        onKeyPress={handleEvent}
        className="places__sorting-type"
        onClick={handleEvent}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        role="menu"
        className={`places__options places__options--custom ${
          isOpened ? 'places__options--opened' : ''
        }`}
      >
        {Object.values(SortTypes).map((type) => {
          return (
            <li
              key={type}
              role="menuitem"
              className={`places__option ${
                sortType === type ? 'places__option--active' : ''
              }`}
              tabIndex={0}
              onClick={handleMenuEvent}
              onKeyPress={handleMenuEvent}
            >
              {type}
            </li>
          );
        })}
      </ul>
      {/**  <select className="places__sorting-type" id="places-sorting">
                <option className="places__option" value="popular" selected="">Popular</option>
                <option className="places__option" value="to-high">Price: low to high</option>
                <option className="places__option" value="to-low">Price: high to low</option>
                <option className="places__option" value="top-rated">Top rated first</option>
                </select> * */}
    </form>
  );
};

export default React.memo(Sort);
