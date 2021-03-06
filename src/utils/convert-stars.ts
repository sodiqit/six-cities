const MAX_RATING = 5;

const convertStarsToWidth = (starsCount: number): string => {
  return `${(Math.round(starsCount) / MAX_RATING) * 100}%`;
};

export { convertStarsToWidth };
