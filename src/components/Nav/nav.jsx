import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div>
            <Link to="/home"> 
                <button>Home</button> 
            </Link>
         
            <Link to="/about"> 
                <button>About</button> 
            </Link>

            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}