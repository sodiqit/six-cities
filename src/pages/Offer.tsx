import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadRooms } from 'store/room/actions';
import { RootState } from 'store';

import RoomDetailed from 'components/RoomDetailed/RoomDetailed';
import Loader from 'components/Loader/Loader';
import MainLayout from '../layouts/MainLayout';

type Params = {
  id: string;
};

const Offer: FC = () => {
  const { id } = useParams<Params>();

  const isLoading = useSelector((state: RootState) => state.rooms.isLoading);
  const rooms = useSelector((state: RootState) => state.rooms.rooms);
  const dispatch = useDispatch();

  const currentRoom = rooms.find((room) => room.id.toString() === id)!;

  useEffect(() => {
    if (!currentRoom) {
      dispatch(loadRooms());
    }
  }, [dispatch, currentRoom]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <MainLayout path="../" title={`Offer ${id}`}>
          <RoomDetailed room={currentRoom} />
        </MainLayout>
      )}
    </>
  );
};

export default Offer;
