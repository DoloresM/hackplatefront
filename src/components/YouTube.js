import React, {useState} from "react";
import {Link} from "react-router-dom";
import Nav from "./Nav"
import styled from "styled-components"

export default function VideoSearch (props){
  const[search, setSearch] = useState([])

  const getMedia = ()=>{
    setSearch()
  }

  return(
    <VideoWrapper>
    <div>
    <Nav/>
    </div>
    </VideoWrapper>

  )
}

const VideoWrapper = styled.div`
`
