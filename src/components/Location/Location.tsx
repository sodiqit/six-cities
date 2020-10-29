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
    <a
      className={`locations__item-link tabs__item ${
        isActive ? 'tabs__item--active' : ''
      }`}
      href="#"
      onClick={onClick}
    >
      <span>{city}</span>
    </a>
  );
};

export { Location };
