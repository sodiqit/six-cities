import React, { FC, useEffect } from 'react';
import Header from 'components/Header/Header';

interface MainLayoutProps {
  title: string;
}

const MainLayout: FC<MainLayoutProps> = (props) => {
  const { title, children } = props;

  useEffect(() => {
    document.title = `${title} | Six cities`;
  }, [title]);

  return (
    <div className="page page--gray page--main">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
