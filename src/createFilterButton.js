"use strict";

import { createBtn } from "./utils.js";
import divTweets from "./createTweetsOl.js";

/**
 * Create a filter button that filter on french language
 * @param {Array} tweets
 * @param {Element} ol
 */
export default (tweets, ol) => {
  const btn = createBtn("Only FR", "filterBtn");
  let state = false;
  btn.addEventListener("click", () => {
    state = !state;
    const listTweets = state
      ? tweets.filter((tweet) => tweet.lang === "fr")
      : tweets;
    const newOl = divTweets(listTweets);
    ol.replaceWith(newOl);
    ol = newOl;
  });
  return btn;
};
