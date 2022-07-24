import { createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPostsInfo, IPost } from '../../types/posts';

const API_URL = 'https://studapi.teachmeskills.by/blog/posts/?limit=20';

interface IPostSate {
  posts: IPostsInfo | null;
}

const initialState: IPostSate = {
  posts: null,
};

export const postsSlide = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      const posts = action.payload.results.map((post: IPost) => ({ ...post, isFavorite: false }));
      state.posts = { ...action.payload, results: posts };
    },
    removePosts: (state) => {
      state.posts = null;
    },
    toggleFavorite: (state, action) => {
      if (state.posts) {
        const newPosts = state?.posts.results.map((post: IPost) => ({
          ...post,
          isFavorite: post.id === action.payload ? !post.isFavorite : post.isFavorite,
        }));
        state.posts = { ...state.posts, results: newPosts };
      }
    },
  },
});

export const getPostsAsync =
  (searchValue: string, orderingValue: string) => async (dispatch: any) => {
    try {
      const response = await axios.get(
        `${API_URL}` + `&search=${searchValue}&ordering=${orderingValue}`,
      );
      dispatch(addPosts(response.data));
    } catch (err: any) {
      throw new Error(err);
    }
  };

export const { addPosts, removePosts, toggleFavorite } = postsSlide.actions;
export const showPosts = (state: { posts: IPostSate }) => state.posts.posts;
export default postsSlide.reducer;
