import React, { FC, useEffect } from 'react';
import Header from 'components/Header/Header';

interface MainLayoutProps {
  title: string;
  theme?: string;
  path?: string;
}

const MainLayout: FC<MainLayoutProps> = (props) => {
  const { title, theme = '', path = './', children } = props;

  useEffect(() => {
    document.title = `${title} | Six cities`;
  }, [title]);

  return (
    <div className={`page ${theme === 'main' ? 'page--gray page--main' : ''}`}>
      <Header path={path} />
      {children}
    </div>
  );
};

export default MainLayout;
