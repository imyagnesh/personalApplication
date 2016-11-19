import * as types from '../constants';

export function beginAjaxCall()  {
    return  { type: types.BEGIN_AJAX_CALL };
}