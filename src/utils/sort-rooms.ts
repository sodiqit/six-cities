import { SortTypes } from 'store/room/types';
import { Room, CityName } from 'services/types';

const sortRooms = (
  rooms: Room[],
  city: CityName,
  sortType: Partial<SortTypes>,
): Room[] => {
  const filteredRooms = rooms.slice().filter((room) => room.city.name === city);

  switch (sortType) {
    case SortTypes.POPULAR:
      return filteredRooms;

    case SortTypes.TOP_RATED:
      return filteredRooms.sort((a, b) => b.rating - a.rating);

    case SortTypes.TO_LOW:
      return filteredRooms.sort((a, b) => b.price - a.price);

    case SortTypes.TO_HIGH:
      return filteredRooms.sort((a, b) => a.price - b.price);

    default:
      return filteredRooms;
  }
};

export { sortRooms };
