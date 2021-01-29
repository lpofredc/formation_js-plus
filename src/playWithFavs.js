'use strict';

localStorage.setItem('myFavs', '');

export default (id) => {
  if (id != null) {
    console.log(id);
    const myFavs = localStorage.getItem('myFavs');
    const myFavsArray = new Set(JSON.stringify(myFavs));
    myFavsArray.add(id);
    localStorage.setItem('myFavs', JSON.stringify([...myFavsArray]));
  }
};
