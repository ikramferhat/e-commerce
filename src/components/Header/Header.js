import React, {useState,useEffect}from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import {Link} from "react-router-dom"
import {List, ListItemText, Box, useScrollTrigger, Typography} from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge} from '@material-ui/core';
import { HeaderBottomMenu, HeaderTopMenu } from '../../DATA';
import SubjectIcon from '@material-ui/icons/Subject';
import { Search, Twitter, Instagram, Facebook} from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import { Delete } from '@material-ui/icons';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import img1 from '../../images/promotion/pro1.jpg';
import img2 from '../../images/promotion/pro2.jpg';
import axios from "axios"
import Product from '../Product/Product';
import SearchBar from './SearchBar/SearchBar';
import CartSidebar from './CartSidebar/CartSidebar';

const useStyles = makeStyles((theme) => ({
  nav: {
    zIndex: 50,
    //transition: '0.5s',
    position: "fixed",
    top: 0,
    left: 0,
    width: '100%'
  },
  Toolbar: {  
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "0px 5%",
    //transition: '0.5s',
    '@media (max-width:320px)': {        
      padding: "0px 5%",
    },
    '@media (max-width:780px)': { 
      flexDirection: 'row',       
      justifyContent: 'space-between',
    }
  },
  Toolbar2: {  
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "0px 5%",
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    zIndex: 2,
    //transition: '0.5s',
    '@media (max-width:780px)': {
      display: 'none'
    }
  },
  logoContainer: {  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: "30px",
    width: '100%',
    padding: "20px 0",
    //margin: '10px',
    ['@media (max-width:780px)']: {
      display: 'none'
    }
  },
  Logo: {
      fontSize: "30px",
      fontWeight: 700,
      textAlign: 'center',
      fontFamily: 'Montserrat, sans-serif',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      ['@media (max-width:780px)']: {
        display: 'none'
      }
  },
  LogoMobile: {
    display: "none",
    fontSize: "30px",
    fontWeight: 400,
    textAlign: 'center',
    fontFamily: 'Italianno, cursive',
    marginLeft: 10,
    ['@media (max-width:780px)']: {
      display: 'block'
    }
  },
  List: {
      display: 'flex',
      //flex: '1 0 0',
      alignItems: 'center',
      listStyle: "none",
      alignItems: 'center',
      margin: '0px',
      ['@media (max-width:780px)']: {        
          display: "none",
        }
  },
  ListMobile: {
    zIndex: 2,
    position:"absolute",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "white",
    color:"black",
    top: 58.118,
    width: '100%',
    padding: 10,
    textAlign: "center",
    left: '-100%',
    transition: '0.5s'
   },
  mhContainer: {
    display: 'none',
    alignItems: 'center',
    ['@media (max-width:780px)']: {
      display: 'flex'
    }
  },
  li:{
    position: 'relative',
    margin: '0 0px',
    '&:hover':{
      '& $dropdown':{
        display: "block",
        visibility: 'visible',
        opacity: 1
      },
    },
  },
  dropdown: {
    position: 'absolute',
    display: 'block',
    opacity: 0,
    top: '100%',
    minWidth: '100px',
    width: 'max-content',
    textAlign: 'left',
    visibility: 'hidden',
    transition: "all .3s ease-in",
    zIndex: 3,
    border: '1px solid lightgray',
    borderTop: 'none',
    borderBottom: 'none',
    '& li': {
      width: '100%',
      borderBottom: '1px solid pink',
      '& a': {
        display: 'block', 
        padding: '20px 10px',
        fontSize: "12px",
        fontWeight: 400,
        color: 'grey',
        transition: "all .3s ease-in",
        cursor: "pointer",
        textDecoration: "none",
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: '.2em',
        textTransform: 'uppercase',
        "&:hover":{ 
          backgroundColor: 'lightgray',
          color: 'black'
        },
    },
    },
   },
  links: {
      position: 'relative',
      display: 'block', 
      fontSize: "12px",
      fontWeight: 400,
      transition: "all 0.5s ease-out",
      cursor: "pointer",
      textDecoration: "none",
      fontFamily: 'Montserrat, sans-serif',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      padding: '20px',
      "&:after" :{  
        position: 'absolute',
        content: '""',
        display:"pink",
        left: 0,
        bottom: 0,
        width: "0px",
        height: "3px",
        background: 'red',
        transition:" 0.3s ease 0s, left 0.3s ease 0s",
      },
      "&:hover:after":{ 
        width: "100%",
        left: "0",
        
      },
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
  },
  Icon: { 
    cursor: "pointer",
    marginRight: 15,
    fontSize: 18,    
    color: "black",
    transition: "all 0.5s ease-out",
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
  },
  }))
  

const Header = (props) => {
    const classes = useStyles();
    const [isMobile,setIsMobile] = useState(false);
    const [navBg, setNavBg] = useState(false);
    const [navDrop, setNavDrop] = useState(false);
    const [colorText,setColorText] = useState(false);
    const [colorT, setColorT] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [showBottomHeader, setShowBottomHeader] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);

    const breakpoint = 780;

    useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 150) {
              setShowBottomHeader(false);
          } else {
            setShowBottomHeader(true);
          }
      });
    }, []);
 
    useEffect(() => {
     const handleResizeWindow = () => setWidth(window.innerWidth);
      // subscribe to window resize event "onComponentDidMount"
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        // unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
      };
    }, []);

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

    const openSidebarCart = () => {
      setSidebarOpen(!sidebarOpen);
      return sidebarOpen;
    };

    const openSearchBar = () => {
      setSearchOpen(!searchOpen);
    };

    const BottomHeaderMobile = () => {
      return (
        <>
                {HeaderTopMenu.map((item,key)=>{
                return(
                  <>
                <li key={key} className={classes.li}>
                  <Link 
                    to={item.url}
                    className={classes.links}
                    style={{
                      padding: '20px 20px',
                      color: '#333333'
                    }}
                  >
                    {item.title}
                  </Link>
                  {item.children && (
                    <ul
                      className={classes.dropdown}
                      style={{ backgroundColor: trigger ? 'white' : navDrop }}
                    >
                       {item.children.map((row)=>{
                        return(
                          <li>
                            <a href={row.url}>{row.title}</a>
                          </li>
                        )})}
                    </ul>
                  )}
                </li>
                </>
              )})}
              <li>
              <Facebook 
                style={{marginRight: 0, margin: width < breakpoint && 15}}
                className={classes.Icon}
              />
              <Instagram
                 style={{marginRight: 0, margin: width < breakpoint && 15}}
                 className={classes.Icon}
              />
              <Twitter 
                style={{marginRight: 0, margin: width < breakpoint && 15}}
                className={classes.Icon}
              />
            </li>
            </>  
      )
    }


    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: props.window ? window() : undefined
    });
  

    useEffect(() => {
      if (window.location.pathname === "/about" || window.location.pathname === "/contact" || window.location.pathname === "/" || window.location.pathname === "/terms" || window.location.pathname === "/privacy" ) {
        setNavBg("transparent");
        setColorText("white");
      }  else {
        setNavBg('white');
        setColorText("#333333");
      }
      if (window.location.pathname === "/about" || window.location.pathname === "/" || window.location.pathname === "/terms" || window.location.pathname === "/privacy" ) {
        setNavDrop("black");
      }  else {
        setNavDrop('white');
      }
      console.log('route --->',window.location.pathname)

    }, [location]);

    if(!navBg || !navDrop) {
      return null
    }
  
    return (
      <>
        <div 
          className={classes.nav}
          style={{
            backgroundColor: trigger ? 'white' : navBg,
            boxShadow: trigger ?  "0 0 16px rgb(0 0 0 / 15%)" :
            (window.location.pathname === "/about" || window.location.pathname === "/contact" || window.location.pathname === "/" || window.location.pathname === "/terms"  || window.location.pathname === "/privacy") ? 
             undefined : "0 0 16px rgb(0 0 0 / 15%)"
          }}
        >
          <div
            className={classes.Toolbar2}
            style={{
              backgroundColor: trigger ? 'white' : navBg,
              display: !showBottomHeader  && 'none'
            }}
          >
            <ul style={{ margin: 0 }}>
              <li>
                <Facebook
                  className={classes.Icon}
                  style={{color: trigger ? '#333333' : colorText}}
                />
              </li>
              <li>
                <Instagram
                  className={classes.Icon}
                  style={{ color: trigger ? '#333333' : colorText}}
                />
              </li>
              <li>
                <Twitter
                  className={classes.Icon}
                  style={{ color: trigger ? '#333333' : colorText}}
                />
              </li>        
            </ul>
            <ul className={classes.List}  style={{ display: 'flex'}}>
              {HeaderTopMenu.map((item,key)=>{
                return(
                  <>
                    <li key={key} className={classes.li}>
                      <Link 
                        to={item.url}
                        className={classes.links}
                        style={{ color: trigger ? '#333333' : colorText}}
                      >
                        {item.title}
                      </Link>
                      {item.children && (
                        <ul
                          className={classes.dropdown}
                          style={{ backgroundColor: trigger ? 'white' : navDrop }}
                        >
                          {item.children.map((row)=>{
                            return(
                              <li><a href={row.url}>{row.title}</a></li>
                            )
                          })}
                        </ul>
                      )}
                    </li>
                  </>
                )})}
              </ul>
            </div>
            <div
              className={classes.Toolbar}
              style={{backgroundColor:trigger ? 'white' : navBg}}
            >
              <div className={classes.mhContainer}>
                <div
                  className={classes.mobileicon}
                  style={{ color: trigger ? '#333333' : colorText}}
                  onClick={() => setIsMobile(!isMobile)}>
                  {isMobile ? (<CloseIcon/> ):(<SubjectIcon />)}
                </div>    
                <h1
                  className={classes.LogoMobile}
                  style={{ color: trigger ? '#333333' : colorText}}
                >
                  ShopTemplate
                </h1>
              </div>
              <div className={classes.mhContainer}>
                <Search
                  className={classes.Icon}
                  onClick={openSearchBar}
                  style={{ color: trigger ? '#333333' : colorText}}
                />
                <Badge badgeContent={totalItems} color="secondary" onClick={openSidebarCart}>
                  <ShoppingCartOutlinedIcon
                    className={classes.Icon}
                    style={{ marginRight: 0,color: trigger ? '#333333' : colorText}}
                  />
                </Badge>
              </div>
              <div className={classes.logoContainer}>
                <h1
                  className={classes.Logo}
                  style={{ color: trigger ? '#333333' : colorText}}
                >
                  ShopTemplate
                </h1>
              </div>
              <ul
                className={(isMobile && width < breakpoint)  ? `${classes.ListMobile}` : `${classes.List}`}
                style={{left: (isMobile && width < breakpoint) && '0%'}}
              >
                {HeaderBottomMenu.map((item,key)=>{
                  return(
                    <>
                      <li key={key} className={classes.li}>
                        <Link 
                          to={item.url}
                          className={classes.links}
                          style={{ color: (trigger || width < breakpoint) ? '#333333' : colorText}}
                        >
                          {item.title}
                        </Link>
                       {item.children && (
                          <ul
                            className={classes.dropdown}
                            style={{ backgroundColor: trigger ? 'white' : navDrop }}
                          >
                            {item.children.map((row)=>{
                              return(
                                <li><a href={row.url}>{row.title}</a></li>
                              )})  
                            }
                          </ul>
                        )}
                      </li>
                    </>
                )})}
                <li style={{display: width < breakpoint && 'none'}}>
                  <Search
                    className={classes.Icon}
                    style={{ color: trigger ? '#333333' : colorText}}
                    onClick={openSearchBar}/>
                </li>
                <li style={{display: width < breakpoint && 'none'}}>
                  <Badge badgeContent={totalItems} color="secondary" onClick={openSidebarCart}>
                    <ShoppingCartOutlinedIcon
                      className={classes.Icon}
                      style={{marginRight: 0,color: trigger ? '#333333' : colorText}}
                    />
                  </Badge>
                </li>
                {width < breakpoint && (
                  <BottomHeaderMobile />
                )}      
            </ul>    
          </div>
           <CartSidebar open={sidebarOpen} openCartFunction={openSidebarCart} />  
           <SearchBar open={searchOpen} openSearchFunction={openSearchBar} />
        </div>
        </>
    
    )
}

export default Header

