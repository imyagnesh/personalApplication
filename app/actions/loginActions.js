import { beginAjaxCall } from './ajaxStatusActions';
import AuthenticationApi from './../api/authenticationApi';
import { push } from 'react-router-redux';

export function login(data) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return AuthenticationApi.login(data).then(result => {
      if (result.success) {
        localStorage.setItem('token', result.token);
        dispatch(push('/admin/dashboard'));
      }
    }).catch(error => {
      throw (error);
    });
  };
}
