import React from 'react'
import { Grid } from '@material-ui/core'
import img from "../../images/hero/hero15.jpg";
import { HeroData } from '../../DATA';
import KeyboardDoubleArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './HeroSection.css';

const Hero = () => {
  return (
    <Grid container className="heroContainer">
      <img src={img}/>
      <div className="heroOverlay">
        <div>
          <h5>{HeroData[0].content1}</h5>
          <h1>{HeroData[0].content2}</h1>
          <h5>{HeroData[0].content3}</h5>
        </div>  
      </div>
        <div className="scrollToBottom">
          <span>shop now</span>
          <a href="#sh">
            <KeyboardDoubleArrowDownIcon className="icon" />
          </a>    
        </div>
    </Grid>
  )
}

export default Hero;
