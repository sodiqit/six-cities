import { UserActionTypes, UserActions, UserState } from './types';

const initialState: UserState = {
  isAuth: false,
  email: null,
};

const reducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.CREATE_USER:
      return {
        ...state,
        isAuth: true,
      };
    case UserActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
