import {
  UserActionTypes,
  UserSignInAction,
  UserSignInSuccessAction,
  UserSignInFailAction,
  UserFavoriteAction,
  UserCreateAction,
  UserData,
} from './types';

const createUser = (userData: UserData): UserCreateAction => ({
  type: UserActionTypes.CREATE_USER,
  payload: userData,
});

const signIn = (userData: UserData): UserSignInAction => ({
  type: UserActionTypes.LOGIN_USER,
  payload: userData,
});

const signInSuccess = (userEmail: string): UserSignInSuccessAction => ({
  type: UserActionTypes.LOGIN_USER_SUCCESS,
  payload: userEmail,
});

const signInFail = (): UserSignInFailAction => ({
  type: UserActionTypes.LOGIN_USER_FAIL,
});

const changeFavorite = (data: {
  id: number;
  isFavorite: boolean;
}): UserFavoriteAction => ({
  type: UserActionTypes.CLICK_FAVORITE,
  payload: data,
});

export { createUser, signIn, signInSuccess, signInFail, changeFavorite };
