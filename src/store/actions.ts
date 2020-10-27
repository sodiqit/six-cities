import { Cities, ChangeCityACtion, ActionsType } from './dto';

const changeCity = (city: Cities): ChangeCityACtion => ({
  type: ActionsType.CHANGE_CITY,
  payload: city,
});

export { changeCity };
