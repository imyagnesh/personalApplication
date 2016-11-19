import * as types from '../constants';
import jwtDecode from 'jwt-decode';
import { beginAjaxCall } from './ajaxStatusAction';
import { push } from 'react-router-redux';


export function loadDashboardSuccess(currentUser) {
  return { type: types.LOAD_DASHBOARD, currentUser };
}

export function loadDashboard() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(loadDashboardSuccess(decoded));
    } else {
      dispatch(push('/admin'));
    }
  };
}
