import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'store';
import Loader from 'components/Loader/Loader';
import MainLayout from '../layouts/MainLayout';

const Favorites = () => {
  const { email, isAuth, isChecking } = useSelector(
    (state: RootState) => state.user,
    shallowEqual,
  );

  return (
    <>
      {isChecking ? (
        <Loader />
      ) : (
        <MainLayout title="Favorites">
          {!isAuth ? <Redirect to="/login" /> : null}
          <h1>Favorites page for {email}</h1>
        </MainLayout>
      )}
    </>
  );
};

export default Favorites;
