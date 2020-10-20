import React from 'react';
import { RoomCard } from 'components/RoomСard/RoomСard';
import { Offer } from 'mocks/offers';

interface RoomCardListProps {
  rooms: Offer[];
  onChangeActiveRoom: (id: string) => void;
}

const RoomCardList = (props: RoomCardListProps) => {
  const { onChangeActiveRoom, rooms } = props;

  const handleMouseEnter = (id: string) => {
    onChangeActiveRoom(id);
  };

  const handleMouseLeave = () => {
    onChangeActiveRoom('');
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {rooms.map((room) => {
        return (
          <RoomCard
            key={room.id}
            room={room}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export { RoomCardList };
