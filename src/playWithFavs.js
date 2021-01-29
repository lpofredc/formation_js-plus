"use strict";

localStorage.setItem("myFavs", "");

const addFavs = (id) => {
  if (id != null) {
    console.log(id);
    const myFavs = localStorage.getItem("myFavs");
    const myFavsArray = new Set(JSON.stringify(myFavs));
    myFavsArray.add(id);
    localStorage.setItem("myFavs", JSON.stringify([...myFavsArray]));
  }
};
