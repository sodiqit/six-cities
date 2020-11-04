import React from 'react';
import { useDispatch } from 'react-redux';

import { userFavoriteAction } from 'store/user/actions';

import RoomCard from 'components/RoomCard/RoomCard';
import { Room } from 'services/types';

interface RoomCardListProps {
  rooms: Room[];
  onChangeActiveRoom: (id: number) => void;
}

const RoomCardList = (props: RoomCardListProps) => {
  const { onChangeActiveRoom, rooms } = props;

  const dispatch = useDispatch();

  const handleMouseEnter = (id: number) => {
    onChangeActiveRoom(id);
  };

  const handleMouseLeave = () => {
    onChangeActiveRoom(-1);
  };

  const handleFavoriteClick = (id: number, isFavorite: boolean) => {
    dispatch(userFavoriteAction({ id, isFavorite }));
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
            onFavoriteClick={handleFavoriteClick}
            href={`/offer/${room.id}`}
          />
        );
      })}
    </div>
  );
};

export default React.memo(RoomCardList);
