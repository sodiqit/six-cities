import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'store';
import { convertStarsToWidth } from 'utils/convert-stars';
import { Room } from 'services/types';

interface RoomCardProps {
  room: Room;
  href: string;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
  onFavoriteClick: (id: number, isFavorite: boolean) => void;
}

const RoomCard = (props: RoomCardProps) => {
  const {
    room: {
      id,
      title,
      price,
      preview_image: img,
      rating,
      is_favorite: isFavorite,
      is_premium: isPremium,
      type,
    },
    onMouseEnter,
    onMouseLeave,
    onFavoriteClick,
    href,
  } = props;

  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  const bookmarkClassName = `place-card__bookmark-button button ${
    isFavorite ? 'place-card__bookmark-button--active' : ''
  }`;

  const handleMouseEnter = () => {
    onMouseEnter(id);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  const handleFavoriteClick = () => {
    if (isAuth) {
      onFavoriteClick(id, !isFavorite);
    }
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={img}
            width="260"
            height="200"
            alt="Place"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={bookmarkClassName}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: convertStarsToWidth(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={href}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default React.memo(RoomCard);
