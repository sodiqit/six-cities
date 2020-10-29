import React from 'react';
import { RoomCard } from 'components/RoomСard/RoomСard';
import { Room } from 'services/types';

interface RoomCardListProps {
  rooms: Room[];
  onChangeActiveRoom: (id: number) => void;
}

const RoomCardList = (props: RoomCardListProps) => {
  const { onChangeActiveRoom, rooms } = props;

  const handleMouseEnter = (id: number) => {
    onChangeActiveRoom(id);
  };

  const handleMouseLeave = () => {
    onChangeActiveRoom(-1);
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
