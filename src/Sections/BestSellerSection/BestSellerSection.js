import React from 'react'
import { Grid, Container, Box } from '@material-ui/core'
import img1 from "../../images/bestSeller/b1.jpg";
import img2 from "../../images/bestSeller/b5.jpg";
import img3 from "../../images/bestSeller/b3.jpg";
import './BestSellerSection.css';

const bestSeller =[
    {
      imgUrl: img1
    },
    {
      imgUrl: img2
    },
    {
      imgUrl: img3
    }
];

const BestSeller = () => {
  return (
    <Grid id="sh" container className="bestSSectionContainer">
      {bestSeller.map((index) => (
        <div className="bestSItem">
          <img src={index.imgUrl}/>
          <div className="overlay" />
        </div> 
      ))}
    </Grid>
  )
}

export default BestSeller;
