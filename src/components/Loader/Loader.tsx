import React, { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className="loader">
      <div className="loader__body">
        <span>
          <span />
          <span />
          <span />
          <span />
        </span>
        <div className="loader__base">
          <span />
          <div className="loader__face" />
        </div>
      </div>
      <div className="loader__longfazers">
        <span />
        <span />
        <span />
        <span />
      </div>
      <h1 className="loader__text">Loading</h1>
    </div>
  );
};

export default Loader;
