'use strict';

export default (url) => {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.warn(err);
    });
};
