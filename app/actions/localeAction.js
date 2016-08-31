import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusAction'; 
import languageApi from './../api/mockLanguageApi';

export function changeLocale(languageLocale) {
  return {
    type: types.CHANGE_LOCALE,
    locale: languageLocale
  };
}

export function loadLanguagesSucess(languages) {
  return {
    type: types.LOAD_LANGUAGE_SUCCESS,
    languages: languages
  };
}

export function loadLanguages() {
    return function(dispatch){
        dispatch(beginAjaxCall());
        return languageApi.getAllLanguages().then(languages => {
            dispatch(loadLanguagesSucess(languages));
        }).catch(error => {
            throw(error);
        });
    };
}