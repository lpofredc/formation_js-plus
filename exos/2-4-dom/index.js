'use strict';

document.addEventListener(
  'DOMContentLoaded',
  function () {
    fetch(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (tweets) {
        console.log('Le tableau de tweet', tweets);

        console.log('--- Question 1 ---');
        /* pour le premier tweet
          - créer une div
          - lui fournir le texte du tweet en textContent
          - ajouter la div au <body>
        */
        const div = document.createElement('div');
        div.textContent = tweets[0].full_text;
        document.body.appendChild(div)


        console.log('--- Question 2 ---');
        // créer un <ol> et remplacer la <div> par le <ol>
        const ol = document.createElement('ol')
        ol.textContent = div.textContent;
        div.remove()
        document.body.appendChild(ol)

        console.log('--- Question 3 ---');
        /* pour chaque tweet
          - créer un <li>
          - mettre le texte dedans
          - mettre le <li> dans le <ol>
        */
        tweets.forEach(e => {
          const li = document.createElement('li');
          li.textContent = e.full_text
          ol.appendChild(li)
        });

        console.log('--- Question 4 ---');
        /* enrichir la fonction de la question 3 pour:
          - ajouter des infos d'auteur et de date
          - ajouter des classes pourt styliser le texte, l'auteur, la date
          - ajouter un listener au clic ou mouseenter pour logguer l'id du tweet dans la console
        */
        // tweets.forEach(tweet => {
        //   const li = document.createElement('li');
        //   const author = document.createElement('p');
        //   author.textContent = '@' + tweet.user.name;
        //   author.className = 'tweetauthor';
        //   const content = document.createElement('p');
        //   content.textContent = tweet.full_text;
        //   content.className = 'tweettext';
        //   const date = document.createElement('p');
        //   date.className = 'tweetdate';
        //   date.textContent = tweet.created_at;
        //   li.appendChild(author);
        //   li.appendChild(date);
        //   li.appendChild(content);
        //   ol.appendChild(li);
        //   li.addEventListener('mouseenter', e => console.log(tweet.id), { 'once': true });
        // });

        console.log('--- BONUS ---');

        const tweetContent = (content, el_class) => {
          const e = document.createElement('p')
          e.textContent = content;
          e.classList.add(el_class)
          return e
        };

        // enrichir la fonction de la question 3 pour aussi afficher les hashtags de chaque tweet
        tweets.forEach(tweet => {
          const li = document.createElement('li');
          const author = tweetContent(tweet.user.name, 'tweetauthor');
          const date = tweetContent(tweet.created_at, 'tweetdate');
          const text = tweetContent(tweet.full_text, 'tweettext');
          const hashtags = tweetContent(tweet.entities.hashtags.map(h => { return '#' + h.text }).join(', '), 'tweethastags')
          li.append(author, date, text, hashtags);
          ol.append(li);
          li.addEventListener('mouseenter', e => console.log(tweet.id));
        });

      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
