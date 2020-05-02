import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { postsAPI } from './api/API.js';
import thunkMiddleware from 'redux-thunk';


const GET_POSTS = 'GET-POSTS';
const GET_POST_COMMENTS = 'GET-POST-COMMENTS';

//action creators
export const getPostSuccessAC = (posts) => {
  return {
    type: GET_POSTS,
    posts,
  }
}
/*export const getPostSuccessAC = () => {
  return {
    type: GET_POST_COMMENTS,
  }
}*/

//thunk creators
export const getPostsTC = () => {
  return async (dispatch) => {
    let data = await postsAPI.getPosts();
    dispatch(getPostSuccessAC(data));
  }
}
export const getPostCommentsTC = () => {
  return async (dispatch) => {
    let response = await postsAPI.getPostComments();
    dispatch(getPostSuccessAC(response));
  }
}
export const addPostTC = (post) => {
  return async (dispatch) => {
    let response = await postsAPI.addPost(post);
    dispatch(getPostSuccessAC(response));
  }
}
export const updatePostTC = (postId, body) => {
  return async (dispatch) => {
    let response = await postsAPI.updatePost(postId, body);
    dispatch(getPostSuccessAC(response));
  }
}
export const deletePostTC = (postId) => {
  return async (dispatch) => {
    let response = await postsAPI.deletePost(postId);
    dispatch(getPostSuccessAC(response));
  }
}
export const addCommentTC = (comment) => {
  return async (dispatch) => {
    let response = await postsAPI.addComment(comment);
    dispatch(getPostSuccessAC(response));
  }
}



const initialState = {
  posts: [],
  comments: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      }
    /*case GET_POST_COMMENTS:
      return {
        ...state
      }*/
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