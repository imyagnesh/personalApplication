import undoable, { distinctState } from 'redux-undo';
import * as types from '../constants';
import initialState from './initialState';

const courses = (state = initialState.courses, action) => {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course),
      ];
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course),
      ];

    default:
      return state;
  }
};

const undoableCourses = undoable(courses, {
  filter: distinctState(),
});

export default undoableCourses;
