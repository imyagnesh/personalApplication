import * as types from './../actions/actionTypes';
import initialState from './initialState';

export const course = (state = initialState.course, action) => {
  switch (action.type) {
    case types.LOAD_COURSE_FORM:
      return initialState.course;
    case types.LOAD_COURSE_FORM_SUCCESS:
      return Object.assign({}, state, action.course);
    default:
      return state;
  }
};
