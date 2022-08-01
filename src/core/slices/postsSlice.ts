import { createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { IPostsInfo, IPost } from '../../types/posts';

const API_URL = 'https://studapi.teachmeskills.by/blog/posts?';

interface IPostSate {
  posts: IPostsInfo | null;
  selectedPage: number;
}

const initialState: IPostSate = {
  posts: null,
  selectedPage: 0,
};

export const postsSlide = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      const data = action.payload;
      const posts = data.results.map((post: IPost) => ({ ...post, isFavorite: false }));
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
    selectedPost: (state, action) => {
      if (state.posts) {
        const newPosts = state?.posts.results.map((post: IPost) => ({
          ...post,
          isSelected: post.id === action.payload,
        }));
        state.posts = { ...state.posts, results: newPosts };
      }
    },
    selectedPost2: (state, action) => {
      if (state.posts) {
        const newPosts = state?.posts.results.map((post: IPost) => ({
          ...post,
          isSelected: post.id === action.payload,
        }));
        state.posts = { ...state.posts, results: newPosts };
      }
    },
    selectedPage: (state, action) => {
      if (state.posts) {
        const selectedPage = action.payload;
        state.selectedPage = selectedPage;
        console.log(selectedPage, 'selectedPage');
      }
    },
  },
});

export const getPostsAsync =
  (searchValue: string, orderingValue: string, offset: number, limit: number) =>
  async (dispatch: any) => {
    try {
      const response = await axios.get(
        `${API_URL}` +
          `search=${searchValue}&ordering=${orderingValue}&offset=${offset}&limit=${limit}`,
      );
      dispatch(addPosts(response.data));
    } catch (err: any) {
      throw new Error(err);
    }
  };

export const { addPosts, removePosts, toggleFavorite, selectedPost, selectedPage } =
  postsSlide.actions;
export const showPosts = (state: { posts: IPostSate }) => state.posts.posts;
export const getSelectedPage = (state: { posts: IPostsInfo }) => state.posts.selectedPage;

export default postsSlide.reducer;
