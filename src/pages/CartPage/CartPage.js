import React,{useState, useEffect, useContext, useRef} from 'react';
import { Grid,Button, Typography,Box,Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate,useParams,Link} from 'react-router-dom';
import axios from "axios";
import paypal from '../../images/creditCard/paypal22.png';
import viza from '../../images/creditCard/visa-credit-card.png';
import skrill from '../../images/creditCard/skrill.png';
import mastercard from '../../images/creditCard/mastercard11.png';
import Close from '@material-ui/icons/Close';
import { ArrowRightAlt } from '@material-ui/icons';
import { useCart } from 'react-use-cart';
import AuthContext from '../../context/AuthContext';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import './CartPage.css';
import SeeMoreButton from '../../components/SeeMoreButton/SeeMoreButton';

const useStyles = makeStyles((theme) => ({

    ProductDetailHeader: {
      backgroundColor: 'rgb(218, 209, 209)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '130px'
    },
    Title: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: '2rem',
      padding: '0px',
      margin: '0px',
      marginSottom: '12px'
    },
    grid:{
      marginBottom: '20px'
    },
    MenuDetailHeader:{
      display: 'flex',
      alignItems: 'center',
      '& $hr':{
        borderLeft:'1px solid black',
        height: '15px',
      }
    },
    Link:{
      color:'black',
      margin: '10px',
      textDecoration: 'none'
    },
    container: {
      backgroundColor:'white',
      marginTop: '50px',
      paddingBottom: '100px'
    },
    gridContainer: {   
      height: '100%',
      display: "flex",
      alignItems: 'flex-start'
    },
    HeaderTable: {   
      backgroundColor:'#fff',
      borderBottom: '1px solid lightgrey',
      position: 'relative',
      '&:hover': {
        backgroundColor: '#f4f4f4',
        '& $RemoveIcon': {
          display: 'block'
        }
      },
      ['@media (max-width: 599px)']: {
      }
    },
    HeaderItem: {   
      padding:10,
      display: 'flex',
      alignItems:'center',
      ['@media (max-width: 599px)']: {
        justifyContent: 'center'
      }
    },
    containerProduct: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
      ['@media (max-width: 599px)']: {
        flexDirection: 'column',
        alignItems: 'center'
      }
    },
    containerImage: {
      width: '80px',
      height: '80px',
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit:"cover",     
    },
    containerDescription: {
      display:'flex',
      flexDirection:'column',
      marginLeft:10,
      ['@media (max-width: 599px)']: {
        alignItems: 'center'
      }
    },
    titleProduct: {
      fontSize: '14px',
      fontWeight: 500,
      color: 'black'
    },
    descriptionProduct: {
      fontSize: '13px',
      color: 'grey'
    },
    plusCard:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '100px',
      height: '40px',
      border: '1px solid lightgrey',
    },
    plusCardButton:{
      cursor: 'pointer',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '30px',
      height: '100%',
      color: 'black',
      fontSize: '1.2rem',
      '&:hover': {
        color: 'red'
      },
    },
    plusCardText:{
      fontSize: '18px',
      fontWeight: 'bolder',
      color: 'black'
    },
    TableHeaderTitle: {
      fontSize: '14px',
      fontWeight: 'bolder',
      color: 'black'
    },
    RemoveIcon: {
      display: 'none',
      position: 'absolute',
      top: 50,
      bottom: 50,
      right: 10,
      fontSize: '20px',
      color: '#CC0000',
      cursor: 'pointer',
      '&:hover': {
        color: 'red'
      },
    },
    cartTotal: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
      padding: 20,
      ['@media (max-width: 960px)']: {
        marginTop: 50
      }
    },
    cartTotalTitle:{
      fontSize: '18px',
      fontWeight: 'bolder',
      color: 'black'
    },
    cartTotalItem: {
      marginTop: 40,
      width: '100%',
      height: '30px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderBottom: '1px solid lightgrey',
    },
    cartTotalItemTextT: {
      fontSize: '17px',
      color: 'black',
      fontWeight: 'bold'
    },
    cartTotalItemTextD: {
      fontSize: '14px',
      color: 'black'
    },
    addCardButton:{
      marginTop: 40,
      cursor: 'pointer',
      backgroundColor: 'black',
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      height: '45px',
      color: 'white',
      fontSize: '12px',
      fontWeight:'bold',
      border: 0,
      //border: '2px solid transparent',
      '&:hover': {
        color: 'white',
        backgroundColor: '#007fbf',
      },
     ['@media (max-width:320px)']: {
        width:"100%",
        marginLeft: '0px',
        marginTop: '20px',
     }
    },
    creditCardContainer: {
      marginTop: 10,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    creditCard: {
      height: 'auto',
      marginRight: 10,
    },
    ContainerBottomButton: {
      height: 70,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      padding: 20
    }
  }));

const header = [
  {
    title: 'product'
  },
  {
    title: 'price'
  },
  {
    title: 'quantity'
  },
  {
    title: 'subtotal'
  },
]

const Cart = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { setPath } = useContext(AuthContext);
    const [val, setVal] = useState(false);
    const [v, setV] = useState('');

    const {
      isEmpty,
      totalUniqueItems,
      cartTotal,
      totalItems,
      items,
      updateItemQuantity,
      removeItem,
      emptyCart
    } = useCart();

    const handleChange = (item) => event => {
      if(event.target.value === "") {
        event.target.value = 1;
        updateItemQuantity(item.id, event.target.valueAsNumber);
      }
      else{
        updateItemQuantity(item.id, event.target.valueAsNumber);
      }
      setVal(false)
    };

    useEffect(() => {
      setPath('cart');
    }, []);

/*
  if(isEmpty) {
    return (
      <h1>Your cart is Empty....</h1>
    )
  }
*/
  return (
    <Grid id="cart">
      <HeaderTitle />
      <Container className="cart-container">
        <Grid container justifyContent='space-between' alignItems="stretch">
          <Grid container item xs={12} md={7} alignItems="flex-start" className="cart-left-table">
            <Grid item container xs={12} sm={12} className="cart-left-table-row">
              <Grid item xs={12} sm={5} className="cart-left-table-row-item">
                <h2>product</h2>
              </Grid>
              <Grid item xs={12} sm={2} className="cart-left-table-row-item">
                <h2>price</h2>
              </Grid>
              <Grid item xs={12} sm={3} className="cart-left-table-row-item">
                <h2>quantity</h2>	
              </Grid>
              <Grid item xs={12} sm={2} className="cart-left-table-row-item">
                <h2>subtotal</h2>
              </Grid>    
            </Grid>
            {isEmpty &&
              <div className="cart-isEmpty">
                <h1>Your cart is Empty....</h1>
              </div>
            }
            {items.map((item,index)=>{
              return(
                <>
                <Grid key={index} container xs={12} sm={12} className="cart-left-table-row">
                  <Close className={classes.RemoveIcon} onClick={()=> removeItem(item.id)}/>
                  <Grid item xs={12} sm={5} className="cart-left-table-row-item">
                    <div className="table-item-containerProduct">
                      <img src={item.images[0]}/>
                      <div>
                        <h2>{item.title}</h2>
                        <h5>Size: Small</h5>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={2} className="cart-left-table-row-item">
                    <h2 className="card-price price">${item.price}</h2>
                  </Grid>
                  <Grid item xs={12} sm={3} className="cart-left-table-row-item">
                    <div className="quantityControl">
                      <button className="left" onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={val && handleChange(item)}
                        onBlur={()=> setVal(true)}
                      />
                      <button className="right" onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>  
                  </Grid>
                  <Grid item xs={12} sm={2} className="cart-left-table-row-item">
                    <h2 className="card-price subtotal">${(item.price * item.quantity).toFixed(2)}</h2>
                  </Grid>
                </Grid> 
               </>
              )})
            }   
            <Grid xs={12} sm={12} className="cart-containerBottomButton">
              <button onClick={()=> navigate('/shop')}>
                <ArrowRightAlt className="arrow-icon left-icon"/>
                continue shopping
              </button>
              <button onClick={()=> emptyCart()}>
                update shopping cart
                <ArrowRightAlt className="arrow-icon right-icon"/>
              </button>
            </Grid>
          </Grid>
          <Grid container xs={12} md={4} className="cartTotal-container">
            <h1 className="cartTotal-title">cart totals</h1>
            <div className="cartTotalItem">
              <h3>total items</h3>
              <h5>{totalItems}</h5>
            </div>
            <div className="cartTotalItem">
              <h3>subtotal</h3>
              <h5>${(cartTotal).toFixed(2)}</h5>
            </div>
            <div className="cartTotalItem">
              <h3>delivery</h3>
              <h5>$110.00</h5>
            </div>
            <div className="cartTotalItem" style={{marginBottom: 40}}>
              <h3>total</h3>
              <h5>${(cartTotal + 110.00).toFixed(2)}</h5>
            </div>
            <SeeMoreButton title="proceed to checkout" onClick={()=> navigate('/user')} />
            <h3 className="bottom-creditCard-text" style={{marginTop: 40}}>Cards We Accepted</h3>
            <div className="cart-creditCardContainer">
               <img src={paypal} />
               <img src={viza} />
               <img src={skrill} />
               <img src={mastercard} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}

export default Cart;

/* <div className={classes.plusCard}>
                      <Box
                        className={classes.plusCardButton}
                        onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}
                       >-</Box>
                       <Typography className={classes.plusCardText}>{item.quantity}</Typography>
                        <Box
                         className={classes.plusCardButton}
                         onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}
                       >+</Box>
                    </div>*/