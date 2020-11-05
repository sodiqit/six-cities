import { Comment } from 'services/types';

enum CommentsActionTypes {
  LOAD = 'comments/LOAD',
  LOAD_SUCCESS = 'comments/LOAD_SUCCESS',
  LOAD_FAIL = 'comments/LOAD_FAIL',
}

type CommentsState = {
  isLoading: boolean;
  error: string | null;
  comments: Comment[];
};

type CommentsLoadAction = {
  type: CommentsActionTypes.LOAD;
  payload: number;
};

type CommentsLoadSuccessAction = {
  type: CommentsActionTypes.LOAD_SUCCESS;
  payload: Comment[];
};

type CommentsLoadFailAction = {
  type: CommentsActionTypes.LOAD_FAIL;
  payload: string;
};

type CommentsActions =
  | CommentsLoadAction
  | CommentsLoadSuccessAction
  | CommentsLoadFailAction;

export { CommentsActionTypes };

export type {
  CommentsState,
  CommentsActions,
  CommentsLoadAction,
  CommentsLoadSuccessAction,
  CommentsLoadFailAction,
};
