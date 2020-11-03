import { UserActionTypes, UserActions, UserState } from './types';

const initialState: UserState = {
  isAuth: false,
  email: null,
  isChecking: true,
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
        isChecking: false,
        email: action.payload,
      };
    case UserActionTypes.LOGIN_USER_FAIL:
      return {
        ...state,
        isAuth: false,
        isChecking: false,
      };
    default:
      return state;
  }
};

export default reducer;
