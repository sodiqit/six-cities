const sortsMap = {
  popular: 'Popular',
  priceToLow: 'Price: high to low',
  priceToHigh: 'Price: low to high',
  topRated: 'Top rated first',
};

const convertFiltersToString = (filters: { [key: string]: string }) => {
  const string = `?${Object.entries(filters)
    .map((el) => el.join('='))
    .join('&')}`;
  return string;
};

const convertStringToFilters = (searchString: string): { [key: string]: string } => {
  const searchPair = searchString.slice(1).split('&');

  const output = {};

  searchPair.forEach((pair) => {
    const [filterName, filterValue] = pair.split('=');
    output[filterName] = filterValue;
  });

  return output;
};

const getKeyByValue = (value: string, obj = sortsMap) => {
  const currentPair = Object.entries(obj).find((pair) => {
    const [, val] = pair;
    if (value === val) return pair;
    return null;
  });

  if (currentPair) {
    const [needKey] = currentPair;
    return needKey;
  }
  throw new Error('something wrong in search key pair in getKeyByValue');
};

export { convertFiltersToString, convertStringToFilters, getKeyByValue, sortsMap };
