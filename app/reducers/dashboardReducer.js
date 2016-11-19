import * as types from '../constants';
import initialState from './initialState';

export const currentUser = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case types.LOAD_DASHBOARD:
      return Object.assign({}, state, action.currentUser);
    default:
      return state;
  }
};
