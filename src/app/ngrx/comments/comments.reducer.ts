import { createReducer, on } from '@ngrx/store';
import * as CommentsActions from './comments.actions';
import { initialState } from './comments.model';

export const commentsReducer = createReducer(
  initialState,

  on(CommentsActions.loadComments, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(CommentsActions.loadCommentsSuccess, (state, { comments }) => ({
    ...state,
    comments,
    loading: false
  })),

  on(CommentsActions.loadCommentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
