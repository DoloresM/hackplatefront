import React from "react";
import {Link} from "react-router-dom"
import Nav from "./Nav"
import styled from "styled-components"

export default function Blog (){
  return(
    <BlogWrapper>
    <Nav/>
    <div class="construction">
    </div>
    </BlogWrapper>
  )
}
const BlogWrapper = styled.div`
`
