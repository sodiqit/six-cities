import React, { FC } from 'react';
import { Comment } from 'services/types';
import { convertStarsToWidth } from 'utils/convert-stars';

interface ReviewProps {
  review: Comment;
}

const Review: FC<ReviewProps> = ({ review }) => {
  const { comment, user, date, rating } = review;
  const { avatar_url: avatarUrl, name, is_pro: isPro } = user;

  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const monthString = dateObj.toLocaleDateString('en', { month: 'long' });
  const monthNumber = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return (
    <>
      <div className={`reviews__user user ${isPro ? 'reviews__user--pro' : ''}`}>
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: convertStarsToWidth(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={`${year}-${monthNumber}-${day}`}>
          {`${monthString} ${year}`}
        </time>
      </div>
    </>
  );
};

export default React.memo(Review);
