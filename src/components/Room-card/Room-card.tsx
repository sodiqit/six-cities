/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { convertStarsToWidth } from 'utils/convert-stars';
import { Offer } from '../../mocks/offers';

interface RoomCardProps {
  room: Offer;
  onMouseEnter: (event: React.MouseEvent) => void;
}

const RoomCard = (props: RoomCardProps) => {
  const {
    room: { title, price, img, rating, isBookmark, isPremium, typeRoom },
    onMouseEnter,
  } = props;

  const bookmarkClassName = `place-card__bookmark-button button ${
    isBookmark ? 'place-card__bookmark-button--active' : ''
  }`;

  return (
    <article className="cities__place-card place-card" onMouseEnter={onMouseEnter}>
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
          <button className={bookmarkClassName} type="button">
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
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{typeRoom}</p>
      </div>
    </article>
  );
};

export { RoomCard };