'use strict';

// Utils

const getJson = url => {
  return fetch(url).then(res => {
    return res.json()
  }).catch(err => {
    console.warn(err)
  })
}

localStorage.setItem('myFavs', '')

const addFavs = (id) => {
  if (id != null) {
    console.log(id)
    const myFavs = localStorage.getItem('myFavs')
    const myFavsArray = new Set(myFavs.split(','))
    myFavsArray.add(id)
    localStorage.setItem('myFavs', [...myFavsArray].join(','))
  }
}

// Create content

const createLi = (tweet) => {
  const li = document.createElement('li')
  li.textContent = `[${tweet.lang}] ${tweet.full_text}`
  li.dataset.id = tweet.id
  li.classList.add('tweetLi')
  li.addEventListener('click', () => {
    addFavs(tweet.id)
  })
  return li
}

const createOl = (tweets) => {
  const ol = document.createElement('ol')
  ol.classList.add('tweetOl')
  tweets.forEach((tweet) => {
    ol.append(createLi(tweet))
  })
  return ol
}

const tweetsByLang = (tweets, lang) => {
  return tweets.filter(e => {
    if (lang != null) {
      return e.lang === lang
    }
    else { return true }
  })
}

const divTweets = (tweets) => {
  const myTweets = document.createElement('div')
  myTweets.setAttribute('id', 'mytweets')
  myTweets.append(createOl(tweets))
  return myTweets
}

const createBtn = (label, style) => {
  const btn = document.createElement('btn')
  btn.textContent = label
  btn.classList.add(style)
  return btn
}

const trackingMousePosition = (e) => {
  console.log(`MousePosition ${e.clientX} | ${e.clientY}`)
}

const filterFrBtn = (tweets) => {
  const btn = createBtn('Only FR', 'filterBtn')
  let state = false
  let listTweets = tweets
  btn.addEventListener('click',
    () => {
      if (state) {
        listTweets = tweetsByLang(tweets, 'fr')
      }
      else {
        listTweets = tweets
      }
      state = !state
      const el = document.getElementById('mytweets')
      el.parentNode.replaceChild(divTweets(listTweets), document.getElementById('mytweets'))
      // el.append(divTweets(listTweets))
    })
  return btn
}

const trackingBtn = () => {
  const btn = createBtn('MousePosition', 'mousePosition')
  let state = false
  btn.addEventListener('click', () => {
    state = !state
    console.log(`set MousePositionTracker to ${state}`)
    if (state) {
      document.addEventListener('mousemove', trackingMousePosition)
    }
    else {
      document.removeEventListener('mousemove', trackingMousePosition)
    }
  })
  return btn
}

const btnBlock = (tweets) => {
  const block = document.createElement('div')
  block.classList.add('btnBlock')
  block.append(filterFrBtn(tweets), trackingBtn())
  return block
}

document.addEventListener(
  'DOMContentLoaded',
  function () {
    const firstTweets = getJson(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    ).catch(err => console.error(err))

    const secondTweets = getJson('https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json').catch(err => console.error(err))

    Promise.all([firstTweets, secondTweets]).then((tab) => {
      const tweets = tab.flat()
      const root = document.getElementById('root');
      root.append(btnBlock(tweets))
      root.append(divTweets(tweets))
    })



    // const myTweets = document.createElement('div')




    // créer un <ol> et remplacer la <div> par le <ol>

    // myTweets.append(createOl(fullTweets))

    // ### Projet Touitter ###
    // Attention: toucher au DOM coûte cher, utiliser le moins possible les APIs du DOM

    // [1] créer une fonction createLi(), qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet

    // [2] créer et ajouter un <ol> à la page, puis y ajouter les <li> de tweets en utilisant [1]

    // [3] créer un <bouton> de filtre pour que quand on clique dessus, ne garde que les tweets en français à l'écran

    // [4] modifier le bouton de filtre pour pouvoir réafficher tous les tweets quand on reclique dessus

    /* [5] créer une fonction createOl(), qui pour un tableau tweets en entrée, crée et retourne un <ol> rempli de <li>
et l'utiliser à [2], [3], [4] */

    /* [6] Créer un bouton qui, quand on clique dessus:
        - active le tracking de la souris: la console affiche position de la souris (event.clientX, event.clientY) quand la souris bouge
        - désactive le tracking quand on reclique dessus
    */

    /* [7] créer une fonction qui crée et renvoie le bouton de filtre.
      Cette fonction doit contenir toute la logique liée au filtre.
      Utiliser cette fonction pour remplacer le code de création du bouton de filtre.
    */

    // [8] Utiliser la fonction getJson() pour charger les tweets à la place des lignes 6 à 11

    /* [9] Utiliser Promise.all() pour charger également les tweets de cette url :
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json'
    */

    // ### BONUS : LOCALSTORAGE ###

    // [1] Rajouter un bouton "fav" à chaque li

    /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
  + et stocker l'ensemble des id_str fav dans le localStorage */

    // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.

  },
  { once: true },
);
