import { CommentsState, CommentsActionTypes, CommentsActions } from './types';

const initialState: CommentsState = {
  isLoading: true,
  error: null,
  comments: [],
};

const reducer = (state = initialState, action: CommentsActions): CommentsState => {
  switch (action.type) {
    case CommentsActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };

    case CommentsActionTypes.LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
