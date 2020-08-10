
import React from "react";
import styled from "styled-components";


const Body = (props) => {
  return(
    <BodyWrapper>
    <div>

      <div className="main-content">
        <div className="section">
          <h2 className="benefits">Why: Prioritize Health</h2>
          <p>Most of us don't lack food, yet nutrient deficient. The standard Amerian diet may be filling but doesn't meet the main needs of our body</p>
          <h3>Benefits</h3>
          <ul className = "list">
            <li className = "bullet-points">Meet nutrition goals</li>
            <li className = "bullet-points">Increase immunity</li>
            <li className = "bullet-points">Increase brain functionality </li>
          </ul>
        </div>
        <div className="section2">
          <img className="info-image" src= {"https://images.unsplash.com/photo-1530026341218-8e3d0b803ca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"}/>
        </div>
      </div>
      <div className="main-content">
        <div className="section">
          <h2 className="benefits">How: Start Hacking</h2>
          <p>Incorporating a vegan diet  simply starts with considering ways to trade animal products with fruites, nuts, and vegitables.There are many creative ways
          to eat meals you are familiar with, with a twist!
           </p>
          <h3>Benefits</h3>
          <ul className = "list">
            <li className = "bullet-points">replace ingredients that tend to be stressful on the body</li>
            <li className = "bullet-points">Satisfy cravings</li>
            <li className = "bullet-points">Get saucy by incorporating the flavors that you love</li>
          </ul>
        </div>
        <div className="section2" >
        <img className="info-image"  src= {"https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80"}/>
        </div>
      </div>
      <div className="main-content">
        <div className="section">
          <h2 className="benefits">The Perks</h2>
          <p>Making a few consistent changed in your diet helps your body to fight off many curable diseases our society strugges with today </p>
          <h3>Benefits</h3>
          <ul className = "list">
            <li className = "bullet-points">Natual Increase in Energy</li>
            <li className = "bullet-points">Reduces Carbon Footprint </li>
            <li className = "bullet-points">Exposure to new and different foods</li>
          </ul>
        </div>
        <div className="section2">
        <img className="info-image"  src= {"https://images.unsplash.com/photo-1515023115689-589c33041d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2434&q=80"}/>
        </div>
      </div>
    </div>
    </BodyWrapper>


  )
}
export default Body;

const BodyWrapper = styled.div `
`
