import React, { FC, MouseEvent } from 'react';
import { CityName } from 'services/types';

interface LocationProps {
  city: CityName;
  isActive: boolean;
  href: string;
  onClick: (evt: MouseEvent) => void;
}

const Location: FC<LocationProps> = (props) => {
  const { city, isActive, onClick } = props;

  return (
    <button
      className={`locations__item-link tabs__item ${
        isActive ? 'tabs__item--active' : ''
      }`}
      onClick={onClick}
      type="button"
    >
      <span>{city}</span>
    </button>
  );
};

export default React.memo(Location);
