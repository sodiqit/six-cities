enum UserActionTypes {
  CREATE_USER = 'user/CREATE_USER',
  LOGIN_USER = 'user/LOGIN_USER',
  LOGIN_USER_SUCCESS = 'user/LOGIN_USER_SUCCESS',
  LOGIN_USER_FAIL = 'user/LOGIN_USER_FAIL',
  CHECK_USER = 'user/CHECK_USER',
  CLICK_FAVORITE = 'user/CLICK_FAVORITE',
}

type UserState = {
  isAuth: boolean;
  email: string | null;
  isChecking: boolean;
};

type UserData = {
  email: string;
  password: string;
};

type UserCreateAction = {
  type: UserActionTypes.CREATE_USER;
  payload: UserData;
};

type UserSignInAction = {
  type: UserActionTypes.LOGIN_USER;
  payload: UserData;
};

type UserSignInSuccessAction = {
  type: UserActionTypes.LOGIN_USER_SUCCESS;
  payload: string;
};

type UserSignInFailAction = {
  type: UserActionTypes.LOGIN_USER_FAIL;
};

type UserFavoriteAction = {
  type: UserActionTypes.CLICK_FAVORITE;
  payload: { id: number; isFavorite: boolean };
};

type UserActions =
  | UserCreateAction
  | UserSignInAction
  | UserSignInSuccessAction
  | UserSignInFailAction;

export { UserActionTypes };
export type {
  UserCreateAction,
  UserSignInAction,
  UserSignInSuccessAction,
  UserSignInFailAction,
  UserFavoriteAction,
  UserData,
  UserState,
  UserActions,
};
