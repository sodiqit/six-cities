import React, { FC, useEffect } from 'react';
import { App } from 'components/App/App';

const Main: FC = () => {
  useEffect(() => {
    document.title = 'Main | 6 cities';
  }, []);
  return <App />;
};

export default React.memo(Main);
