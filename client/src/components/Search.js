import React, {Component} from "react";
import Nav from "./Nav";
import RecipeForm from "./RecipeForm"
import {Link} from "react-router-dom";
import Footer from "./Footer";


const Search = ()=>{
            return(
                <div>
                <Nav/>
                  <h1>Hello Search</h1>
                  <RecipeForm/>
                </div>
              )
            }





export default Search;
