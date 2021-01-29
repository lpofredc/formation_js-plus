'use strict';

export const createBtn = (label, style) => {
  const btn = document.createElement('btn');
  btn.textContent = label;
  btn.classList.add(style);
  return btn;
};

export const isTweetFr = (tweet) => !!tweet.lang?.startsWith('fr');

console.log('test');

console.log('test');
