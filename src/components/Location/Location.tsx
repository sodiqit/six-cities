import React, { FC, MouseEvent } from 'react';
import { City } from 'store/dto';

interface LocationProps {
  city: City;
  isActive: boolean;
  href: string;
  onClick: (evt: MouseEvent) => void;
}

const formateCity = (city: string) => {
  return `${city[0].toUpperCase()}${city.slice(1)}`;
};

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
      <span>{formateCity(city)}</span>
    </a>
  );
};

export { Location };
