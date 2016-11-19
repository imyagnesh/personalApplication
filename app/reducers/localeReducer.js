import * as types from '../constants';
import initialState from './initialState';

export const locale = (state = initialState.locale, action) => {
  switch (action.type) {
    case types.CHANGE_LOCALE:
      return action.locale;
    default:
      return state;
  }
};
