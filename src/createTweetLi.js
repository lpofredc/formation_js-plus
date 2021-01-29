"use strict";
import addFavs from "./playWithFavs.js";

export default (tweet) => {
  const li = document.createElement("li");
  li.classList.add("tweetLi");
  li.textContent = `[${tweet.lang}] ${tweet.full_text}`;
  li.dataset.id = tweet.id;
  li.addEventListener("click", () => {
    addFavs(tweet.id);
  });
  return li;
};
