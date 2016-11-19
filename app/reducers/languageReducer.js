import * as types from '../constants';
import initialState from './initialState';

export const languages = (state = initialState.languages, action) => {
  switch (action.type) {
    case types.LOAD_LANGUAGE_SUCCESS:
      return action.languages;
    default:
      return state;
  }
};
