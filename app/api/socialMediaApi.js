class SocialMediaApi {
  static getInstaImages() {
    return new Promise((resolve, reject) => {
      fetch('/publicApi/instaImages')
        .then(response => response.json())
        .then(json => resolve(Object.assign([], json)))
        .catch(err => reject(Object.assign([], err)));
    });
  }

  static getTweets() {
    return new Promise((resolve, reject) => {
      fetch('/publicApi/tweets')
        .then(response => response.json())
        .then(json => resolve(Object.assign([], json)))
        .catch(err => reject(Object.assign([], err)));
    });
  }
}

export default SocialMediaApi;
