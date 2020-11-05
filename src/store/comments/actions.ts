import { Comment } from 'services/types';
import {
  CommentsActionTypes,
  CommentsLoadAction,
  CommentsLoadSuccessAction,
  CommentsLoadFailAction,
} from './types';

const loadComments = (id: number): CommentsLoadAction => ({
  type: CommentsActionTypes.LOAD,
  payload: id,
});

const loadCommentsSuccess = (comments: Comment[]): CommentsLoadSuccessAction => ({
  type: CommentsActionTypes.LOAD_SUCCESS,
  payload: comments,
});

const loadCommentsFail = (error: string): CommentsLoadFailAction => ({
  type: CommentsActionTypes.LOAD_FAIL,
  payload: error,
});

export { loadComments, loadCommentsSuccess, loadCommentsFail };
