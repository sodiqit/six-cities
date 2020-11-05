import React, { FC } from 'react';

import { Comment } from 'services/types';

import Review from 'components/Review/Review';

interface ReviewsProps {
  reviews: Comment[];
}

const ReviewsList: FC<ReviewsProps> = ({ reviews }) => {
  const reviewItems = reviews.map((review) => {
    return (
      <li key={review.id} className="reviews__item">
        <Review review={review} />;
      </li>
    );
  });

  return <ul className="reviews__list">{reviewItems}</ul>;
};

export default React.memo(ReviewsList);
