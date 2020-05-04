import {createStore, applyMiddleware, Dispatch} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { postsAPI } from './api/API';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';


const GET_POSTS = 'GET-POSTS';
const GET_COMMENTS = 'GET-COMMENTS';

export type PostObjectType = {
  title: string
  body: string
}


//action creators
type ActionsTypes = getPostSuccessACType | getCommentsSuccessAC
export type getPostSuccessACType = {
  type: typeof GET_POSTS,
  posts: Array<object>,
}
export const getPostSuccessAC = (posts: Array<object>): getPostSuccessACType => {
  return {
    type: GET_POSTS,
    posts,
  }
}
export type getCommentsSuccessAC = {    //type
  type: typeof GET_COMMENTS,
  comments: Array<object>
}
export const getCommentsSuccessAC = (comments: Array<object>): getCommentsSuccessAC => {
  return {
    type: GET_COMMENTS,
    comments,
  }
}

//thunk creators
type ThunkType = ThunkAction<Promise<void>, StateType, any, ActionsTypes>
export const getPostsTC = (): ThunkAction<Promise<void>, StateType, any, ActionsTypes> => {
  return async (dispatch) => {
    let data = await postsAPI.getPosts();
    dispatch(getPostSuccessAC(data));
  }
}
export const addPostTC = (post: PostObjectType): ThunkType => {
  return async (dispatch) => {
    await postsAPI.addPost(post);
    let data = await postsAPI.getPosts();
    dispatch(getPostSuccessAC(data));
  }
}
export const updatePostTC = (postId: number, post: PostObjectType): ThunkType => {
  return async (dispatch) => {
    await postsAPI.updatePost(postId, post);
    let data = await postsAPI.getPosts();
    dispatch(getPostSuccessAC(data));
  }
}
export const deletePostTC = (postId: number): ThunkType => {
  return async (dispatch) => {
    await postsAPI.deletePost(postId);
    let data = await postsAPI.getPosts();
    dispatch(getPostSuccessAC(data));
  }
}
export const getPostCommentsTC = (postId: number): ThunkType => {
  return async (dispatch) => {
    let data = await postsAPI.getPostComments(postId);
    dispatch(getCommentsSuccessAC(data));
  }
}
export const addCommentTC = (postId: number, body: PostObjectType): ThunkType => {
  return async (dispatch) => {
    await postsAPI.addComment(postId, body);
    let data = await postsAPI.getPostComments(postId);
    dispatch(getCommentsSuccessAC(data));
  }
}


export type InitialStateType = {
  posts: Array<object>,
  comments: Array<object>,
}
const initialState: InitialStateType = {
  posts: [],
  comments: [],
}

const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      }
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.comments
      }
    default:
      return state
  }
}

type RootReducerType = typeof reducer;
export type StateType = ReturnType<RootReducerType>

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}