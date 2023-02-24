import React from 'react'
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';
import Rating from '@mui/material/Rating';
import { useCart } from 'react-use-cart';
import {useNavigate} from 'react-router-dom';
import { RemoveRedEyeOutlined } from '@material-ui/icons';
import './product.css';

const useStyles = makeStyles((theme) => ({
  viewIcon: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    margin: 'auto 0px',
    fontSize: 20,
    transition: "all 0.5s ease",
    cursor: 'pointer',
    color: 'rgb(216, 210, 210)',
    '&:hover': {
      color: 'white'
    }
  } 
}))

const Product = (props) => {
    const navigate = useNavigate();
    const classes = useStyles();
    const { addItem } = useCart();
    return (
      <div className="productContainer">  
        {props.isSold && (
          <div className="sold">
            <strong>-10%</strong>
          </div>
        )}
        <img src={props.image} />
        <div className="overlay" />
        <div className="center">
          <RemoveRedEyeOutlined
            onClick={()=> {navigate(`/shop/${props.category.toLowerCase()}/${props.id}`)}}
            className={classes.viewIcon}
          />
          <div className="top">
            <Rating 
              name="half-rating"
              defaultValue={props.rating}
              precision={0.5}
              readOnly
              size='small'
              style={{flex:1}}
            />
            <h3>${props.price}</h3>
          </div>
          <button onClick={()=>addItem(props.item)}>add to cart</button>
        </div>
      </div>
    )
}

export default Product;

     /*"&:after" :{  
        position: 'absolute',
        content: '""',
        display:"block",
        left: 0,
        top: "20px",
        right: "50%",
        bottom: "0",
        width: "0px",
        height: "2px",
        background: 'white',
        transition:" 0.3s ease 0s, left 0.3s ease 0s",
         },
        "&:hover:after":{ 
            width: "50%",
            left: "0"
        },*/
