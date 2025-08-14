export interface CommentsState {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}

export const initialState: CommentsState = {
  comments: [],
  loading: false,
  error: null
};

export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

export interface CommentsResponse {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
}