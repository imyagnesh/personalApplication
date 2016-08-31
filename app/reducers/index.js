import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import courses from './coursesReducer';
import {authors} from './authorReducer';
import {course} from './courseReducer';
import {locale} from './localeReducer';
import {languages} from './languageReducer';
import {ajaxCallsInProgress} from './ajaxStatusReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const  rootReducer = combineReducers({
    course,
    courses,
    authors,
    ajaxCallsInProgress,
    locale,
    languages,
    form: reduxFormReducer, // mounted under "form"
    routing: routerReducer   
});

export default rootReducer;