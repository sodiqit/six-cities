import React, { FC } from 'react';

interface InsideListProps {
  insides: string[];
}

const InsideList: FC<InsideListProps> = (props) => {
  const { insides } = props;

  return (
    <ul className="property__inside-list">
      {insides.map((inside) => {
        return (
          <li key={inside} className="property__inside-item">
            {inside}
          </li>
        );
      })}
    </ul>
  );
};

export default InsideList;
