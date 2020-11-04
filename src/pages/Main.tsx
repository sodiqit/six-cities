import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Main from 'components/Main/Main';
import MainEmpty from 'components/MainEmpty/MainEmpty';
import Loader from 'components/Loader/Loader';
import { RootState } from 'store';
import { loadRooms } from 'store/room/actions';
import MainLayout from '../layouts/MainLayout';

const MainPage: FC = () => {
  const isLoading = useSelector((state: RootState) => state.rooms.isLoading);
  const rooms = useSelector((state: RootState) => state.rooms.rooms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRooms());
  }, [dispatch]);

  const isEmpty = rooms && rooms.length === 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <MainLayout theme="main" title="Main">
          {isEmpty ? <MainEmpty /> : <Main />}
        </MainLayout>
      )}
    </>
  );
};

export default MainPage;
