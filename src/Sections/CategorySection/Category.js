import React from 'react'
import { Grid, Container, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import sh from "../../images/category/sh1.jpg";
import el from "../../images/category/el2.jpg";
import cl from "../../images/category/cl3.jpg";
import { Link } from 'react-router-dom';
import './Category.css';

const categories =[
    {
      name: 'clothes',
      url: '/shop/clothes',
      imgUrl: cl
    },
    {
      name: 'shoes',
      url: '/shop/shoes',
      imgUrl: sh
    },
    {
      name: 'electronics',
      url: '/shop/electronics',
      imgUrl: el
    }
];

const Category = () => {
  return (
    <Grid id="sh" container className="categorySectionContainer">
      {categories.map((index) => (
        <div className="categoryItem">
          <img src={index.imgUrl}/>
          <div className="overlay">
            <Link to={index.url} style={{textDecoration: 'none'}}>
              <div>
                <h1>{index.name}</h1>
              </div>
            </Link>
          </div>
      </div> 
    ))}
    </Grid>
  )
}

/*  <Box className={classes.GridItem}>
            <img src={w}  className={classes.image}/>
            <div className={classes.overlay}>
            <Link to="/shop" className={classes.center}>
              <h1 className={classes.name}> MEN'S</h1>
            </Link>
            </div>
            </Box> 
            <Box className={classes.GridItem}>
            <img src={m}  className={classes.image}/>
            <div className={classes.overlay}>
            <Link to="/shop" className={classes.center}>
                  <h1 className={classes.name}> KID'S</h1>
            </Link>
            </div>
            </Box> 
            
            
       </Grid>
       */

export default Category
