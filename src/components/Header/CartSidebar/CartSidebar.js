import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { Delete } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import './CartSidebar.css';

const useStyles = makeStyles((theme) => ({
  Icon: { 
    cursor: "pointer",
    marginRight: 15,
    fontSize: 18,    
    color: "black",
    transition: "0.2s",
    "&:hover":{
      color: "green",
    },
  },
  sidebar: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    overflowX: 'hidden',
    top: 0,
    backgroundColor: 'white',
    right: 0,
    height: '100%',
    width: '450px',
    zIndex: 2,
    transition: 'all .5s',
    '@media (max-width:768px)': {
      width: '100%'
    }
  },
  sidebarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: "white",
    '& h3': {
      fontSize: "18px",
      fontWeight: 400,
      fontFamily: 'Montserrat, sans-serif',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'black'
    },
    '& button': {
      border: 'none',
      backgroundColor: 'transparent',
      padding: 10,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'    
    }
  },
  cartSidContainer: {
    display: 'flex',
    overflowY: 'auto',
    overflowX: 'hidden',
    maxHeight: '40vh',
    flexDirection: 'column',
    //backgroundColor: "black",
    padding: 10,
    flexGrow: 1

  },
  cart: {
    height: 100,
    backgroundColor: "white",
    boxShadow: '0 0 16px rgb(0 0 0 / 15%)',
    display: 'flex',
    padding: 10,
    marginTop: 15,
  },
  containerImage: {
    width: '100px',
    height: '100px',
    overflow: 'hidden',
    backgroundColor: "white",
  },
  image: {
    height: "100%",
    minWidth: '100%',
    objectFit: 'contain',
  },
  discreption: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: 'max-content',
    margin: '0px 5px',
    '& h2': {
      fontSize: "15px",
      fontWeight: 500,
      fontFamily: 'Montserrat, sans-serif',
      letterSpacing: '.1em',
      textTransform: 'none',
      color: 'black',
      margin: 0
    },
    '& h4': {
      fontSize: "15px",
      fontWeight: 400,
      fontFamily: 'Montserrat, sans-serif',
      letterSpacing: '.1em',
      textTransform: 'none',
      color: 'grey',
      margin: 0,
      marginTop: 10
    }
  },
  delete: { 
    fontSize: 20,    
    color: "grey",
    cursor: 'pointer'
    },
  cartTotal: {
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: "lightgray",
    padding: 20,
    paddingBottom: 20,
    marginTop: 15
  },
  cartTotalItem: {
    marginBottom: 10,
    width: '100%',
    height: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottom: '1px solid grey',
  },
  cartTotalItemTextT: {
    fontSize: "12px",
    fontWeight: 400,
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    color: 'black',
  },
  cartTotalItemTextD: {
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing: '.1em',
    textTransform: 'none',
    color: 'grey'
  },
  addCardButton:{
    marginTop: 20,
    cursor: 'pointer',
    backgroundColor: 'black',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    fontFamily: 'Montserrat, sans-serif',
    letterSpacing: '.1em',
    color: 'white',
    fontSize: '12px',
    textTransform: 'uppercase',
    border: '2px solid transparent',
    '&:hover': {
      color: 'white',
      backgroundColor: '#007fbf',
    }
  },
  sidebarOverlay: {
    position: 'fixed',
    overflowX: 'hidden',
    top: 0,
    right: 0,
    height: '100%',
    width: '100%',
    zIndex: 1,
    pointerEvents: 'auto',
    visibility: 'hidden',
    backgroundColor: '#000',
    opacity: '0.75',
    transition: 'visibility .2s ease',
    '&::-webkit-scrollbar': {
      display: 'none',
      width:0,
    }
  },
  }))
  
const CartSidebar = ({ openCartFunction, open }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const {cartTotal, items} = useCart();

  return (
    <>
    <div
      className="cart-sidebar"
      style={{ transform: open ? 'translateX(0%)' : 'translateX(100%)'}}
    >
      <div className="cart-sidebarHeader">
        <h3>Cart</h3>
        <button onClick={openCartFunction}>
          <CloseIcon style={{fontSize: 20}} />
        </button>
      </div>
      <div className="cartSidebar-content">
        {items.map((item,index)=>{
          return(
            <div className="cartSidebar-cart">
              <img src={item.images[0]}/>
              <div>
                <h2>{item.title}</h2>
                <h4>${item.price}</h4>
              </div>
              <Delete className={classes.delete}/>
            </div>
          )})}
      </div>
      <div className="cartSidebar-bottom">
        <div className="cartSidebar-bottom-item">
          <h3>Subtotal</h3>
          <h4>${(cartTotal).toFixed(2)}</h4>
        </div>
        <div className="cartSidebar-bottom-item">
          <h3>Delivery</h3>
          <h4>$110.00</h4>
        </div>
        <div className="cartSidebar-bottom-item">
          <h3>Total</h3>
          <h4>${(cartTotal + 110.00).toFixed(2)}</h4>
        </div>
        <button className={classes.addCardButton} onClick={()=> {navigate('/user');openCartFunction()}}>PROCEED TO CHECKOUT</button>
        <button className={classes.addCardButton} onClick={()=> {navigate('/cart');openCartFunction()}}>
          view card
        </button>
      </div>
    </div>
      <div
        style={{visibility: open? 'visible' : 'hidden'}}
        className={classes.sidebarOverlay}
        onClick={()=> {openCartFunction()}}
      />
      </>
    )
  };

export default CartSidebar;
