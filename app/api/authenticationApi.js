import { checkHttpStatus, parseJSON } from '../utils';

class AuthenticationApi {
  static register(data) {
    return new Promise((resolve, reject) => {
      fetch('/publicApi/register', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(checkHttpStatus)
        .then(parseJSON)
        .then(json => resolve(Object.assign([], json)))
        .catch(err => reject(Object.assign([], err)));
    });
  }

  static login(data) {
    return new Promise((resolve, reject) => {
      fetch('/publicApi/login', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(checkHttpStatus)
        .then(parseJSON)
        .then(json => resolve(Object.assign([], json)))
        .catch(err => reject(Object.assign([], err)));
    });
  }

  static isUserUnique(email) {
    return new Promise((resolve, reject) => {
      if (email === undefined) {
        reject('Please enter email');
        return;
      }
      fetch(`/publicApi/isUserUnique/${email}`)
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(response => resolve(response))
        .catch(err => reject(Object.assign([], err)));
    });
  }
}

export default AuthenticationApi;
