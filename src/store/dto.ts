import { Offer } from 'mocks/offers';

type Cities = 'amsterdam' | 'cologne' | 'brussels' | 'hamburg' | 'dusseldorf' | 'paris';

enum ActionsType {
  CHANGE_CITY = 'CHANGE_CITY',
}

type State = {
  city: Cities;
  rooms: Offer[];
};

type ChangeCityACtion = {
  type: ActionsType.CHANGE_CITY;
  payload: Cities;
};

export { ActionsType };
export type { State, ChangeCityACtion, Cities };
