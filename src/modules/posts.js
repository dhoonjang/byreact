import Axios from "axios";
import { handleActions } from "redux-actions";

const GET_LOADING_POSTS = "post/GET_LOADING_POST";
const GET_POSTS_SUCCESS = "post/GET_POSTS_SUCCESS";
const GET_POSTS_FAILURE = "post/GET_POSTS_FAILURE";

export const getPost = () => async dispatch => {
  dispatch({ type: GET_LOADING_POSTS });
  try {
    const contents = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: GET_POSTS_SUCCESS, payload: contents.data });
  } catch (e) {
    dispatch({ type: GET_POSTS_FAILURE, payload: e });
    throw e;
  }
};

const initState = { postlist: [], loading: false };

const posts = handleActions(
  {
    [GET_LOADING_POSTS]: state => {
      return {
        ...state,
        loading: true
      };
    },
    [GET_POSTS_SUCCESS]: (state, action) => {
      return {
        ...state,
        postlist: action.payload,
        loading: false
      };
    },
    [GET_POSTS_FAILURE]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
  },
  initState
);

export default posts;
