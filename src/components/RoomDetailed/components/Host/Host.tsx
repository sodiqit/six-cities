import React, { FC } from 'react';

interface HostProps {
  avatarUrl: string;
  isPro: boolean;
  name: string;
  description: string;
}

const Host: FC<HostProps> = (props) => {
  const { avatarUrl, isPro, name, description } = props;

  return (
    <>
      <div className="property__host-user user">
        <div
          className={`property__avatar-wrapper user__avatar-wrapper ${
            isPro ? 'property__avatar-wrapper--pro' : ''
          }`}
        >
          <img
            className="property__avatar user__avatar"
            src={`../${avatarUrl}`}
            width="74"
            height="74"
            alt="Host avatar"
          />
        </div>
        <span className="property__user-name">{name}</span>
      </div>
      <div className="property__description">
        <p className="property__text">{description}</p>
      </div>
    </>
  );
};

export default Host;
