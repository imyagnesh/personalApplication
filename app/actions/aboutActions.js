import * as types from '../constants';
import { beginAjaxCall } from './ajaxStatusAction';
import SocialMediaApi from './../api/socialMediaApi';

export function loadInstaImagesSuccess(images) {
  return { type: types.LOAD_INSTA_IMAGES_SUCCESS, images };
}

export function loadTweetsSuccess(tweets) {
  return { type: types.LOAD_TWEETS_SUCCESS, tweets };
}

export function loadInstaImages() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return SocialMediaApi.getInstaImages().then(images => {
      dispatch(loadInstaImagesSuccess(images));
    }).catch(error => {
      throw (error);
    });
  };
}

export function loadTweets() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return SocialMediaApi.getTweets().then(tweets => {
      dispatch(loadTweetsSuccess(tweets));
    }).catch(error => {
      throw (error);
    });
  };
}
