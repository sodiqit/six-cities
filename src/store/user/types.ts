enum UserActionTypes {
  CREATE_USER = 'user/CREATE_USER',
  LOGIN_USER = 'user/LOGIN_USER',
  LOGIN_USER_SUCCESS = 'user/LOGIN_USER_SUCCESS',
  CHECK_USER = 'user/CHECK_USER',
}

type UserState = {
  isAuth: boolean;
  email: string | null;
};

type UserData = {
  email: string;
  password: string;
};

type UserCreateAction = {
  type: UserActionTypes.CREATE_USER;
  payload: UserData;
};

type UserCheckAction = {
  type: UserActionTypes.CHECK_USER;
};

type UserSignInAction = {
  type: UserActionTypes.LOGIN_USER;
  payload: UserData;
};

type UserSignInSuccessAction = {
  type: UserActionTypes.LOGIN_USER_SUCCESS;
  payload: string;
};

type UserActions = UserCreateAction | UserSignInAction | UserSignInSuccessAction;

export { UserActionTypes };
export type {
  UserCreateAction,
  UserSignInAction,
  UserSignInSuccessAction,
  UserCheckAction,
  UserData,
  UserState,
  UserActions,
};
