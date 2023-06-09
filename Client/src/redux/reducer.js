import { ADD_FAV } from "./action";
import { REMOVE_FAV } from "./action";

const initialState = { 
    myFavorites:[] 
};

const rootReducer = (state = initialState , action) => {
    console.log(action)
    console.log(action.type)
    console.log(action.payload)
    switch(action.type) {
        case ADD_FAV:
         return { 
            ...state,
            myFavorites: action.payload,
            allCharacters: action.payload 
        };
        case REMOVE_FAV:
            return { 
                ...state,
                myFavorites: action.payload 
            };
        default:
            return {...state};
        };
};


export default rootReducer;