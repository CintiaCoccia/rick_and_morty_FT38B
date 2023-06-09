export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

// import {ADD_FAV, REMOVE_FAV} from "./types";

export const addFav = (personaje) => { 
    return { type:"ADD_FAV", payload: personaje};
};

export const removeFav = (id) => { 
   return { type:"REMOVE_FAV", payload: id};
};

export const filterCards = (gender) => {
   return { type: FILTER , payload: gender}
};

export const orderCards = (ORDER) => {
    return { type: ORDER, payload:ORDER }
}

// 1. **`filterCards`**: esta función recibe por parámetro un **gender**. Debe retornar una action con el **type** igual a "**FILTER**" y el payload será igual al parámetro recibido.

// 2. **`orderCards`**: esta función recibe por parámetro un **orden** (será: **A**: ascendente o **D**: descendente). Debe retornar una action con el **type** igual a "**ORDER**" y el payload será igual al parámetro recibido.