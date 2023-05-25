export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

// import {ADD_FAV, REMOVE_FAV} from "./types";

export const addFav = (personaje) => { 
    return { type:"ADD_FAV", payload: personaje};
};

export const removeFav = (id) => { 
   return { type:"REMOVE_FAV", payload: id};
};
