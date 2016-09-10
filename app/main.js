import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import createHistory from 'history/lib/createBrowserHistory';
// import withScroll from 'scroll-behavior';

import injectTapEventPlugin from 'react-tap-event-plugin';

import muiTheme from './muiTheme';
import LanguageProvider from './containers/LanguageProvider';
import { getRoutes } from './routes';
import { translationMessages } from './i18n';
import { loadLanguages } from './actions/localeAction';
injectTapEventPlugin();

const state = {};
const store = configureStore(browserHistory, state);
store.dispatch(loadLanguages());
// const createScrollHistory =  withScroll(createHistory());
// const appHistory = useRouterHistory(createScrollHistory)();
const history = syncHistoryWithStore(browserHistory, store);

const appRender = (translatedMessages) => {
  render(
    <Provider store={store}>
      <LanguageProvider messages={translatedMessages}>
        <Router history={history} routes={getRoutes(store)} onUpdate={() => window.scrollTo(0, 0)} />
      </LanguageProvider>
    </Provider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./i18n', () => {
    appRender(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(System.import('intl'));
  }))
    .then(() => Promise.all([
      System.import('intl/locale-data/jsonp/en.js'),
      System.import('intl/locale-data/jsonp/de.js'),
    ]))
    .then(() => appRender(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  appRender(translationMessages);
}
