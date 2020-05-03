import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { postsAPI } from './api/API.js';
import thunkMiddleware from 'redux-thunk';


const GET_POSTS = 'GET-POSTS';
const GET_COMMENTS = 'GET-COMMENTS';


//action creators
export type getPostSuccessACType = {     //type
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
export const getPostsTC = () => {
  return async (dispatch) => {
    let data = await postsAPI.getPosts();
    dispatch(getPostSuccessAC(data));
  }
}
export const addPostTC = (post: object) => {
  return async (dispatch) => {
    await postsAPI.addPost(post);
    let data = await postsAPI.getPosts();
    dispatch(getPostSuccessAC(data));
  }
}
export const updatePostTC = (postId: string, post: object) => {
  return async (dispatch) => {
    await postsAPI.updatePost(postId, post);
    let data = await postsAPI.getPosts();
    dispatch(getPostSuccessAC(data));
  }
}
export const deletePostTC = (postId: string) => {
  return async (dispatch) => {
    await postsAPI.deletePost(postId);
    let data = await postsAPI.getPosts();
    dispatch(getPostSuccessAC(data));
  }
}
export const getPostCommentsTC = (postId: string) => {
  return async (dispatch) => {
    let data = await postsAPI.getPostComments(postId);
    dispatch(getCommentsSuccessAC(data));
  }
}
export const addCommentTC = (postId: string, body: object) => {
  return async (dispatch) => {
    await postsAPI.addComment(postId, body);
    let data = await postsAPI.getPostComments(postId);
    dispatch(getCommentsSuccessAC(data));
  }
}


export type InitialStateType = {       //type
  posts: Array<object>,
  comments: Array<object>,
}
const initialState: InitialStateType = {
  posts: [],
  comments: [],
}

const reducer = (state = initialState, action: any): InitialStateType => {
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

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}