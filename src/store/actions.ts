import { City, ChangeCityACtion, ActionsType } from './dto';

const changeCity = (city: City): ChangeCityACtion => ({
  type: ActionsType.CHANGE_CITY,
  payload: city,
});

export { changeCity };
