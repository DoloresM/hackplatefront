import React from "react";
import styled from "styled-components";

import Hero from "./Hero";
import Heading from "./Heading";

const Header = ()=>{
  return(
    <HeaderWrapper>
      <div id="slider">
          <figure>
            <img src="../media/pexels-photo-3669638.jpeg"/>
            <img src="../media/photo-1455619452474-d2be8b1e70cd.jpeg"/>
            <img src="../media/photo-1535914254981-b5012eebbd15.jpeg"/>
            <img src="../media/photo-1467453678174-768ec283a940.jpeg"/>
            <img src="../media/pexels-photo-3669638.jpeg"/>
          </figure>
      </div>
    </HeaderWrapper>
  )
}
export default Header;

const HeaderWrapper = styled.div`
    min-height: 80v;
#slider{
  overflow: hidden;
}
#slider figure{
    position: relative;

    width: 500%;
    margin: 0;
    left:0;
    animation: 20s slider infinite;
}
#slider figure img{
  width: 20%;
  float: left;
}

@keyframes slider {
  0% {
    left: 0;
  }
  20%{
    left: 0;
  }
  25%{
    left: -100%;
  }
  45%{
    left: -100%;
  }
  50%{
    left: -200%;
  }
  70%{
    left: -200%;
  }
  75%{
    left: -300%;
  }
  95%{
    left: -300%;
  }
  100% {
    left: -400%;
  }
}

}
`
