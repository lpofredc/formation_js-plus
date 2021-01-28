"use strict";

const getJson = (url) => {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.warn(err);
    });
};

const numIsPair = function (n) {
  return n % 2 === 0;
};

const genRandom = (n) => {
  return Math.floor(Math.random() * n);
};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    getJson(
      "https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json",
    )
      // .then(function (resp) {
      //   return resp.json();
      // })
      .then(async function (tweets) {
        console.log("Le tableau de tweet", tweets);

        // Asynchrone

        console.log("--- Question 1 ---");
        /* créer une Promesse qui renvoie un nombre aléatoire entre 0 et 99 au bout de 2 secondes.
            Si ce nombre est pair, le résoudre, sinon le rejeter.

            Utiliser setTimeout().
        */

        const pRandom = new Promise(function (resolve, reject) {
          setTimeout(() => {
            const num = genRandom(99);
            if (numIsPair(num)) resolve(num);
            else reject("Not pair");
          }, 500);
        });

        pRandom
          .then((res) => {
            console.log("l40", res);
          })
          .catch((err) => {
            console.error("l40", err);
          });

        console.log("--- Question 2 ---");
        /* Consommer la Promesse de 1) pour
            - afficher le texte du tweet correspondant au nombre renvoyé quand elle résoud
            - logguer un message d'erreur expliquant que le nombre est incorrect quand elle est rejetée
        */

        pRandom
          .then((res) => {
            console.log("l53", "tweet[", res, "] : ", tweets[res].full_text);
          })
          .catch((err) => {
            console.log("Random nomber is not Pair!!!");
          });

        console.log("--- Question 3 ---");
        // Même chose que la 2), mais avec async/await
        const getTweet = (n) => {
          console.log("getTweet :", n);
          return "tweet[", n, "] : ", tweets[n].full_text;
        };

        try {
          const number = await pRandom;
          const tweet = getTweet(number); // on attend que la Promesse se résolve, et on récupère sa valeur promise
          console.log("waitForTweet", tweet);
        } catch (e) {
          console.warn(e);
        }

        console.log("--- Question 4 ---");
        /* Écrire une fonction getJson() qui prend une URL en entrée,
          et renvoie la Promesse de récupérer la réponse HTTP transformée en JSON
        */

        const jsonResult = await getJson(
          "https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json",
        );
        console.log("jsonResult", jsonResult);

        console.log("--- Question 5 ---");
        // Utiliser cette fonction pour charger les données de ce script à la place des lignes 6 à 11

        console.log("--- BONUS ---");
        /* Créer une Promesse qui:
          - crée un nombre aléatoire (delay) en 0 et 5000
          - au bout de 2s, rejeter la Promesse avec le texte 'Trop long...'
          - au bout de delay ms pour résoudre le nombre delay
          - consommer la Promesse de sorte que si elle est rejetée, on recommence jusqu'à ce qu'elle résolve
        */
        // const pDelay = new Promise((res, err) => {
        //   const d = genRandom(5000)
        //   console.log('<pDelay> Delay is', d)
        //   const successTimeout = setTimeout(() => {
        //     console.log('<pDelay> success')
        //     res(d)
        //   }, d)
        //   setTimeout(() => {
        //     err('<pDelay> Too Long...')
        //     clearTimeout(successTimeout)
        //   }, 2000)

        // })

        // pDelay.then(res => { console.log('delay', res) }).catch(err => { console.error(err) })
        // Promise.resolve(pDelay).then(res => { console.log('resolve', res) }).catch(err => {
        //   console.warn('resolve', err)
        // })

        const makeDelay = () => {
          const pDelay = new Promise((res, err) => {
            const d = genRandom(5000);
            console.log("<pDelay> Delay is", d);
            const successTimeout = setTimeout(() => {
              console.log("<pDelay> success");
              res(d);
            }, d);
            setTimeout(() => {
              err("<pDelay> Too Long...");
              clearTimeout(successTimeout);
            }, 2000);
          });
          return pDelay;
        };

        const f = () => {
          makeDelay()
            .then((nb) => {
              console.log("OK", nb);
            })
            .catch((err) => {
              console.error("err");
              f();
            });
        };
        f();
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
