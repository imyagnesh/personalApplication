import * as types from '../constants';
import { beginAjaxCall } from './ajaxStatusAction';
import courseApi from './../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourseFormSuccess(course) {
  return { type: types.LOAD_COURSE_FORM_SUCCESS, course };
}

export function initCourseForm(error) {
  return { type: types.LOAD_COURSE_FORM };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw (error);
    });
  };
}

export function saveCourse(courseData) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(courseData).then(course => {
      courseData.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      throw (error);
    });
  };
}

export function loadCourseForm(courseId) {
  console.log(courseId);
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.getCourse(courseId).then(course => {
      dispatch(loadCourseFormSuccess(course));
    }).catch(error => {
      dispatch(loadCourseFormError(error));
      throw (error);
    });
  };
}
