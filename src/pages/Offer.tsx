import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import RoomDetailed from 'components/RoomDetailed/RoomDetailed';
import MainLayout from '../layouts/MainLayout';

type Params = {
  id: string;
};

const Offer: FC = () => {
  const { id } = useParams<Params>();

  return (
    <MainLayout path="../" title={`Offer ${id}`}>
      <RoomDetailed id={id} />
    </MainLayout>
  );
};

export default Offer;
