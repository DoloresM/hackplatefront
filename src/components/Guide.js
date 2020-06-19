import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components"
import Nav from "./Nav";

export default function Guide (){
  return(
    <GuideWrapper>
    <div>
    <Nav/>
    </div>
    </GuideWrapper>
  )
}
const GuideWrapper = styled.div`

`
