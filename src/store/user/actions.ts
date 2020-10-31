import {
  UserActionTypes,
  UserSignInAction,
  UserSignInSuccessAction,
  UserCreateAction,
  UserData,
  UserCheckAction,
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

const userCheckAction = (): UserCheckAction => ({
  type: UserActionTypes.CHECK_USER,
});

export { userCreateAction, userSignInAction, userSignInSuccessAction, userCheckAction };
