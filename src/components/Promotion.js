import React,{useEffect} from 'react'
import { Button, Grid,Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import fCH from "../images/promotion/chapeau.jpg";
import ch from "../images/promotion/chap.jpg";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const useStyles = makeStyles((theme) => ({
    GridContainer: {
        padding:"100px 0%",
        backgroundColor:"white",
        '&:hover':{
            '& $overlay': {
                animation: "$lefttoright 2s forwards",               
            }}

       
       
    },
    GridItem: {
        position: 'relative',
        height:"500px",  
    },
    overlay: {
        top: 0,
        left: 0,
        position: 'absolute',
        width: "100%",
        height: '100%',
        background : 'rgba(0, 0, 0, 0.2)',    
        display:"flex",
        justifyContent:"right",
        alignItems:"center",  
      },
    promotionInfo:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"white",
    },
    promotionImage: {
        height: "100%",
        width:"100%",
        objectFit:"contain",
    },
    image1: {
        height: "100px",
        backgroundSize: 'contain',  
        ['@media (max-width:780px)']: {
            height: "50px",
        }
    },
    button: {
        fontSize: "10px",
        fontWeight:700,
        transition: "all 0.3s ease 0s",
        color:theme.palette.fontColor.primary,
        cursor: "pointer",
       
        },
    center: {
            background: "white",
            color:theme.palette.fontColor.primary,
            display:"flex",
            width:"250px",
            alignItems:"center",
            justifyContent:"space-between",
            ['@media (max-width:780px)']: {
                width:"150px",
            }
        },       
    "@keyframes lefttoright": {
            from: { width:"100%"},
            to: { width: "50%"},
        },
     
}))

const Promotion = () => {
    const classes = useStyles();

    return (
        <Slider 
        autoplay={true}
        dots={false}
        infinite={true}
        speed={500}
        slidesToScroll={1}
        arrows={false}
        slidesToShow={1}
        > 
         <Grid container className={classes.GridContainer}>  
                <Grid  item xs={12} sm={12} className={classes.GridItem} >
                    <img src={fCH}  className={classes.promotionImage}/>
                    <div className={classes.overlay}>
                        <div className={classes.center}>
                            <div className={classes.promotionInfo}>
                                <img src={ch}  className={classes.image1}/>
                                <div style={{fontSize:"10px"}}>300 $</div>
                                </div>                               
                            <Button to="/" className={classes.button}>SHOP NOW </Button>
                            </div>
                        </div>          
                 </Grid> 
        </Grid>
        <Grid container className={classes.GridContainer}>  
                <Grid  item xs={12} sm={12} className={classes.GridItem} >
                    <img src={fCH}  className={classes.promotionImage}/>
                    <div className={classes.overlay}>
                        <div className={classes.center}>
                            <div className={classes.promotionInfo}>
                                <img src={ch}  className={classes.image1}/>
                                <div style={{fontSize:"10px"}}>300 $</div>
                                </div>                               
                            <Button to="/" className={classes.button}>kkkkkk</Button>
                            </div>
                        </div>          
                 </Grid>       
        </Grid>
    </Slider>
    )
}


export default Promotion

/*
import React, {useState,useEffect}from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import {Link} from "react-router-dom"
import {List, ListItemText, Box, useScrollTrigger} from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge} from '@material-ui/core';
import { Menu } from '../DATA';
import SubjectIcon from '@material-ui/icons/Subject';
import { Search, Twitter, Instagram, Facebook} from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const useStyles = makeStyles((theme) => ({
    Toolbar: {  
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: "0px 7%",
      ['@media (max-width:320px)']: {        
        padding: "0px 7%",
      },
      ['@media (max-width:780px)']: {        
        justifyContent: 'space-between',
      }
    },
    Toolbar2: {  
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: "30px",
      padding: "10px 7%",
     // borderBottom: '1px solid lightgray'
    },
    Logo: {
        fontSize: "35px",
        fontWeight: 600,
        margin: '0px 30px',
        fontFamily: 'Raleway, sans-serif',
        ['@media (max-width:780px)']: {
          display: 'none'
        }
    },
    LogoMobile: {
      color:  theme.palette.fontColor.primary,
      fontSize: "2rem",
      fontWeight: 700,
      display: "none",
      ['@media (max-width:780px)']: {
        display: 'block'
      }
    },
    List: {
        display: "flex",
        alignItems: 'center',
        listStyle: "none",
        margin:0,
        ['@media (max-width:780px)']: {        
            display: "none",
          }
    },
    ListMobile: {
        display: "none",
        transition: "display 3s ease-in",
        ['@media (max-width:780px)']: {
            position:"absolute",
            display: "block",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: "red",
            color:"black",
            right: "0px",
            top: "50px",
            width: "100%",
            paddind: 10,
            textAlign: "center",
            zIndex:2
     } },
    li:{
      position: 'relative', 
      height: '100%',
      '&:hover':{
        '& $dropdown':{
          display: "block",
        },
      },
    },
    dropdown: {
      position: 'absolute',
      display: 'none',
      left: 0,
      //transition: "all 0.3s ease",
      zIndex: 1,
      backgroundColor: 'green'
     },
    links: {     
        fontSize: "12px",
        fontWeight: 400,
        transition: "all 0.5s ease-out",
        cursor: "pointer",
        textDecoration: "none",
        display: 'block',
        padding: '50px 20px',
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: '.2em',
        textTransform: 'uppercase',
    },
    colorTextLight: {
      color: 'black',
      "&:hover":{
        color: "green",
      },
      ['@media (max-width:780px)']: {
        color: "black",
      }
    },
    colorTextDark: {
      color:  'white',
      "&:hover":{
        color: "green",
      },
      ['@media (max-width:780px)']: {
        color: "black",
      }
    },
    IconContainer: {     
      cursor: "pointer",
      marginRight: 15
    },
    Icon: { 
    fontSize: 20,    
    color: "black",
    "&:hover":{
        color: "green",
      },
    },
    mobileicon: {
        display: "none",
        transition: "0.5s ease-in",
        ['@media (max-width:780px)']: {
            display:" block",
            color: "black",
         }
    }
  }))
  

const Header = (props) => {
    const classes = useStyles();
    const [isMobile,setIsMobile] = useState(false);
    const [navBg, setNavBg] = useState("transparent");
    const [colorT, setColorT] = useState("colorLight");
    const navigate = useNavigate();
    let location = useLocation();
    const { totalItems } = useCart();

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: props.window ? window() : undefined
    });
  
    useEffect(() => {
      if (window.location.pathname === "/about" || window.location.pathname === "/contact" || window.location.pathname === "/" ) {
        setNavBg("transparent");
        setColorT("colorTextDark");
      }  else {
        setNavBg('white');
        setColorT("colorTextLight");
      }
    }, [location]);
  
    return (
        <AppBar 
           style={{
            backgroundColor: trigger ? 'white' : navBg,
            transition: trigger ? '0.3s' : '0.5s',
            boxShadow: trigger ?  "0 0 16px rgb(0 0 0 / 15%)" :
            (window.location.pathname === "/about" || window.location.pathname === "/contact" || window.location.pathname === "/") ? 
             undefined : "0 0 16px rgb(0 0 0 / 15%)"
          }}
           elevation={0}
           position="fixed"
        >
           <div className={classes.Toolbar2} style={{backgroundColor: trigger ? 'white' : navBg, transition: trigger ? '0.3s' : '0.5s',}}>
            <ul>
              <li className={classes.IconContainer}>
                <Facebook className={classes.Icon}/>
              </li>
              <li className={classes.IconContainer}>
                <Instagram className={classes.Icon}/>
              </li>
              <li className={classes.IconContainer}>
                <Twitter className={classes.Icon}/>
              </li>        
            </ul>
            <ul>
              <li className={classes.IconContainer}>
              <Search className={classes.Icon}/>
              </li>
              <li onClick={()=> navigate('/cart')} className={classes.IconContainer} style={{ marginRight: 0 }}>
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCartOutlinedIcon className={classes.Icon}/>
              </Badge>
              </li>
            </ul>
          </div>
          <div className={classes.Toolbar } style={{backgroundColor:trigger ? 'white' : navBg, transition: trigger ? '0.3s' : '0.5s',}}>
            <h1 className={classes.LogoMobile}>Shop</h1>
            <ul className={isMobile ? `${classes.ListMobile}` : `${classes.List}`}>
              {Menu.map((item,index)=>{
                return(
                  <>
                  {index === 3 && (
                    <h1
                      className={classes.Logo}
                      style={{ color: trigger ? 'black' :
                        (window.location.pathname === "/about" || window.location.pathname === "/contact" || window.location.pathname === "/") ?  
                         'white' : 'black'
                      }}
                    >FAKESTORE</h1>
                  )}
                  <li key={index} className={classes.li}>
                    <Link 
                      to={item.url}
                      className={
                        `${classes.links}
                         ${trigger ? classes.colorTextLight :
                         (window.location.pathname === "/about" || window.location.pathname === "/contact" || window.location.pathname === "/") ?  
                         classes.colorTextDark : classes.colorTextLight} 
                        `
                      }
                    >
                      {item.title}
                    </Link>
                    {item.children && (
                      <ul className={classes.dropdown}>
                         {item.children.map((row)=>{
                          return(
                            <li className={classes.li}>
                               <a 
                                 href={row.url}
                                 style={{ padding: '20px'}}
                                 className={
                                   `${classes.links}
                                   ${trigger ? classes.colorTextLight :
                                     (window.location.pathname === "/about" || window.location.pathname === "/contact" || window.location.pathname === "/") ?  
                                      classes.colorTextDark : classes.colorTextLight
                                   } 
                                    `
                                  }
                                >{row.title}
                               </a>
                            </li>
                          )})}
                      </ul>
                    )}
                  </li>
                  </>
                )})}
            </ul>
            <div className={classes.mobileicon} onClick={() => setIsMobile(!isMobile)}>
               {isMobile ? (<CloseIcon/> ):(<SubjectIcon />)}
            </div>
          </div>

        </AppBar>
    
    )
}

export default Header



/*
import React, {useState,useEffect}from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import {Link} from "react-router-dom"
import {List,ListItemText,Box} from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge} from '@material-ui/core';
import { Menu } from '../DATA';
import SubjectIcon from '@material-ui/icons/Subject';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const useStyles = makeStyles((theme) => ({
    Toolbar: {  
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: "0px 7%",
      height: "70px",
      ['@media (max-width:320px)']: {        
        padding: "0px 7%",
      }
    },
    Logo: {
        color:  theme.palette.fontColor.primary,
        fontSize: "2rem",
        fontWeight: 700,
    },
    List: {
        display: "flex",
        listStyle: "none",
        ['@media (max-width:780px)']: {        
            display: "none",
          }
    },
    ListMobile: {
        display: "none",
        ['@media (max-width:780px)']: {
            position:"absolute",
            display: "block",
            backgroundColor: "black",
            color:"#fff",
            right: "0px",
            top: "70px",
            transition: "all 0.5s ease-out",
            width: "100%",
            textAlign: "center"
     } },
    li :{
        backgroundColor:  'blue',
    },
    links: {     
        fontSize: "15px",
        fontWeight: 500,
        transition: "all 0.5s ease-out",
        color:  theme.palette.fontColor.primary,
        cursor: "pointer",
        textDecoration: "none",
        margin: 15,
        "&:hover":{
            color: "green",
            },
            ['@media (max-width:780px)']: {
                color: "white"
            }
    },
    IconContainer: {     
      cursor: "pointer",
      margin: 15,
      '& $i':{
        color: 'black',
        "&:hover":{
          color: "pink",
        },
      }
    },
    Icon: {     
    color: "black",
    "&:hover":{
        color: "green",
      },
    },
    mobileicon: {
        display: "none",
        ['@media (max-width:780px)']: {
            display:" block",
            color: "black",
         }
    }
  }))
  

const Header = () => {
    const classes = useStyles();
    const [isMobile,setIsMobile] = useState(false);
    const [navBg, setNavBg] = useState("red");
    const navigate = useNavigate();
    let location = useLocation();

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

    useEffect(() => {
      if (window.location.pathname === "/about") {
        setNavBg("transparent");
      } else {
        setNavBg('white')
      }
    }, [location]);
  
    return (
        <AppBar 
           style={{backgroundColor:window.location.pathname === "/about"&&'transparent',
           boxShadow:window.location.pathname != "/about"&&"0 0 16px rgb(0 0 0 / 15%)"
          }}
           elevation={0}
           position="fixed"
        >
          <Toolbar className={classes.Toolbar } style={{backgroundColor:navBg}}>
            <h1 className={classes.Logo}>Shop.</h1>
            <List className={isMobile ? `${classes.ListMobile}` : `${classes.List}`}>
              {Menu.map((item,index)=>{
                return(
                  <ListItemText key={index}>
                    <Link to={item.url} className={classes.links}>{item.title}</Link>
                  </ListItemText>
                )})}
            </List>
            <List className={classes.List} >
              <Box className={classes.IconContainer}>
                <i class="fa fa-search" aria-hidden="true"></i>
              </Box>
              <Box onClick={()=> navigate('/cart')} className={classes.IconContainer}>
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCartOutlinedIcon className={classes.Icon}/>
              </Badge>
              </Box>
            </List>
            <div className={classes.mobileicon} onClick={() => setIsMobile(!isMobile)}>
               {isMobile ? (<CloseIcon/> ):(<SubjectIcon />)}
            </div>
          </Toolbar>
        </AppBar>
    
    )
}

export default Header
*/