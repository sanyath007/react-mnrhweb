import { ADD_ARTICLE, ADD_NEWS } from './actionTypes';

export const addArticle = content => ({
  type: ADD_ARTICLE,
  payload: content
});

export const addNews = content => ({
  type: ADD_NEWS,
  payload: content
});
