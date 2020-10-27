import { Offer } from 'mocks/offers';

type City = 'amsterdam' | 'cologne' | 'brussels' | 'hamburg' | 'dusseldorf' | 'paris';

enum ActionsType {
  CHANGE_CITY = 'CHANGE_CITY',
}

type State = {
  city: City;
  rooms: Offer[];
  cities: City[];
};

type ChangeCityACtion = {
  type: ActionsType.CHANGE_CITY;
  payload: City;
};

export { ActionsType };
export type { State, ChangeCityACtion, City };
