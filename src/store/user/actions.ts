import {
  UserActionTypes,
  UserSignInAction,
  UserSignInSuccessAction,
  UserSignInFailAction,
  UserFavoriteAction,
  UserCreateAction,
  UserData,
} from './types';

const userCreateAction = (userData: UserData): UserCreateAction => ({
  type: UserActionTypes.CREATE_USER,
  payload: userData,
});

const userSignInAction = (userData: UserData): UserSignInAction => ({
  type: UserActionTypes.LOGIN_USER,
  payload: userData,
});

const userSignInSuccessAction = (userEmail: string): UserSignInSuccessAction => ({
  type: UserActionTypes.LOGIN_USER_SUCCESS,
  payload: userEmail,
});

const userSignInFailAction = (): UserSignInFailAction => ({
  type: UserActionTypes.LOGIN_USER_FAIL,
});

const userFavoriteAction = (data: {
  id: number;
  isFavorite: boolean;
}): UserFavoriteAction => ({
  type: UserActionTypes.CLICK_FAVORITE,
  payload: data,
});

export {
  userCreateAction,
  userSignInAction,
  userSignInSuccessAction,
  userSignInFailAction,
  userFavoriteAction,
};
