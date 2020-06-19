import React from "react";
import styled from "styled-components"

const Heading = ()=>{
  return(
    <HeadWrapper>
    <div id="heading">
      <h1>The Plant-based Guide - Hack Your Plate</h1>
      <h2>Don't change your diet, enhance it!</h2>
    </div>
    </HeadWrapper>
  )
}
export default Heading

const HeadWrapper = styled.div`
position: fixed;
top: 100px;
background: transparent;
color: white;
width: 20%;
margin-left: 11%;
`
