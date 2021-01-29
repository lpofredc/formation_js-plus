"use strict";

const createOl = (tweets) => {
  const ol = document.createElement("ol");
  ol.classList.add("tweetOl");
  const liTweets = tweets.map(createLi);
  ol.append(...liTweets);
  return ol;
};

const divTweets = (tweets) => {
  const myTweets = document.createElement("div");
  myTweets.append(createOl(tweets));
  return myTweets;
};
