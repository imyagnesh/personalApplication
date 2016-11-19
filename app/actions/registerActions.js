import { beginAjaxCall } from './ajaxStatusActions';
import AuthenticationApi from './../api/authenticationApi';
import { push } from 'react-router-redux';

export function registerUser(data) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return AuthenticationApi.register(data).then(result => {
      if (result.success) {
        dispatch(push('/admin'));
      }
    }).catch(error => {
      throw (error);
    });
  };
}

