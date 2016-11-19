import * as types from '../constants';
import initialState from './initialState';

export const instaImages = (state = initialState.instaImages, action) => {
  switch (action.type) {
    case types.LOAD_INSTA_IMAGES_SUCCESS:
      return action.images;
    default:
      return state;
  }
};


export const tweets = (state = initialState.tweets, action) => {
  switch (action.type) {
    case types.LOAD_TWEETS_SUCCESS:
      return action.tweets;
    default:
      return state;
  }
};
