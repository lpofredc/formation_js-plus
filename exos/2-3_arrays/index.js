"use strict";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    fetch(
      "https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json",
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (tweets) {
        console.log("Le tableau de tweet", tweets);

        // Tableaux

        console.log("--- Question 0 ---");
        // observer la structure des données des tweets dans la console du navigateur

        console.log("--- Question 1 ---");
        /* pour le premier tweet
          - l'afficher dans la console
          - afficher son texte dans la console
        */
        console.log("--- reponse 1 ---", tweets[0].full_text);
        console.log("--- Question 2 ---");
        // afficher dans la console les textes de tous les tweets du tableau en utilisant .forEach()
        tweets.forEach((element, index) => {
          console.log(index, element.full_text);
        });
        console.log("--- Question 3 ---");
        // créer un tableau avec seulement tous les textes des tweets en utilisant .map()
        const tweet_texts = tweets.map((e) => {
          return e.full_text;
        });
        console.log("only texts", tweet_texts);
        console.log("--- Question 4 ---");
        // créer un tableau avec seulement les dates de publication
        const tweets_createdate = tweets.map((e) => {
          return e.created_at;
        });
        console.log("create dates", tweets_createdate);
        console.log("--- Question 5 ---");
        // créer un tableau avec seulement les tweets en français en utilisant .filter()
        const tweetsfr = tweets.filter((e) => {
          return e.lang === "fr";
        });
        console.log("only french", tweetsfr);
        console.log("--- Question 6 ---");
        // trouver le tweet qui parle de 'Moonlighter' en utilisant .find()
        const tweets_moonlighter = tweets.find((e) => {
          return e.full_text.includes("Moonlighter");
        });
        console.log("Moonlighter", tweets_moonlighter);

        console.log("--- Question 7 ---");
        // lister tous les textes de hashtags du premier tweet
        const a_hashtags = tweets[0].entities.hashtags.map((e) => e.text);
        console.log("first hashtags", a_hashtags);

        console.log("--- BONUS ---");
        // lister les 56 tweets qui ont pour hashtag `coronadiary`

        const coronadiary = tweets.filter((e) => {
          return e.entities.hashtags.find((e) => {
            return e.text === "coronadiary";
          });
        });

        const coronadiarySimp = tweets.filter((e) =>
          e.entities.hashtags.find((e) => {
            return e.text === "coronadiary";
          }),
        );
        console.log(coronadiary);
        console.log(coronadiarySimp);
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
