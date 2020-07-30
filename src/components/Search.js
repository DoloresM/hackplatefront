import React, {Component} from "react";
import Nav from "./Nav";
import Forming from "./nForm"
import RecipeForm from "./RecipeForm"
import {Link} from "react-router-dom";
import Footer from "./Footer";


const Search = ()=>{
            return(
                <div>
                <Nav/>
                  <div class="construction">
                    COMING SOON . . .
                  </div>
                  <h1>Hello Search</h1>
                  <Forming/>
                  <RecipeForm/>
                </div>
              )
            }





export default Search;
