import * as types from '../constants';
import { beginAjaxCall } from './ajaxStatusAction';
import languageApi from './../api/mockLanguageApi';

export function changeLocale(languageLocale) {
  return {
    type: types.CHANGE_LOCALE,
    locale: languageLocale,
  };
}

export function loadLanguagesSucess(languages) {
  return {
    type: types.LOAD_LANGUAGE_SUCCESS,
    languages,
  };
}

export function loadLanguages() {
  return function getAllLanguages(dispatch) {
    dispatch(beginAjaxCall());
    return languageApi.getAllLanguages().then(languages => {
      dispatch(loadLanguagesSucess(languages));
    }).catch(error => {
      throw (error);
    });
  };
}
