import React, { FC } from 'react';
import Main from 'components/Main/Main';
import MainLayout from '../layouts/MainLayout';

const MainPage: FC = () => {
  return (
    <MainLayout title="Main">
      <Main />
    </MainLayout>
  );
};

export default MainPage;
