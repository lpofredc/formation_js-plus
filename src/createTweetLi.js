'use strict';
import addFavs from './playWithFavs.js';
import moment from 'moment';
import 'moment/locale/fr';

export default (tweet) => {
  const li = document.createElement('li');
  const text = document.createElement('div');
  const date = document.createElement('div');

  text.textContent = `[${tweet.lang}] ${tweet.full_text}`;
  text.classList.add('tweetText');
  date.textContent = moment(
    tweet.created_at,
    'ddd MMM DD HH:mm:ss ZZ YYYY'
  ).fromNow();
  date.classList.add('tweetDate');

  li.append(text);
  li.append(date);
  li.dataset.id = tweet.id;
  li.addEventListener('click', () => {
    addFavs(tweet.id);
  });
  return li;
};
