import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const languages = [
  {
    value: 'en',
    text: 'English',
  },
  {
    value: 'de',
    text: 'German',
  },
];

class LanguageApi {
  static getAllLanguages() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], languages));
      }, delay);
    });
  }
}

export default LanguageApi;
