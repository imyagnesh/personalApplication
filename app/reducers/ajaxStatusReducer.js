import * as types from '../constants';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}

function actionTypeEndsInError(type) {
  return type.substring(type.length - 8) === '_ERROR';
}

export const ajaxCallsInProgress = (state = initialState.ajaxCallsInProgress, action) => {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type) || actionTypeEndsInError(action.type)) {
    return state - 1;
  }

  return state;
};
