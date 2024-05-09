import React from 'react'
import { Grid } from '@material-ui/core'
import img from "../../images/hero/hero19.jpg";
import { HeroData } from '../../DATA';
import KeyboardDoubleArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './HeroSection.css';

const Hero = () => {
  return (
    <Grid container className="heroContainer">
      <img src={'https://img.freepik.com/free-photo/young-woman-beautiful-dress_1303-17511.jpg?t=st=1715256199~exp=1715259799~hmac=524ecb20c14ca829dcb1a33dc7b8c998bd631ef9ae93ae2a003e5bd21c7a26e1&w=740'}/>
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
