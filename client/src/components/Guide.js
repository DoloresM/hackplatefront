import React, {useState, useEffect, useRef} from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import styled from "styled-components"
import Nav from "./Nav";
import Plate from "./Plate";
import Footer from "./Footer"

//TODO: 

const Guide = ()=>{
  return(
    <GuideWrapper>
        <Nav/>
        <div id="guideHeader">
          <div class="headline">
            <h1>Create Your Plate</h1>
          </div>
        </div>
        <Plate />
        <Footer/>
    </GuideWrapper>
  )
}

export default Guide;



const GuideWrapper = styled.div`

`
