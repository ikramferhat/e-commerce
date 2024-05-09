import React,{useState, useEffect, useContext} from 'react';
import { Grid } from '@material-ui/core';
import axios from "axios";
import Product from '../../components/Product/Product';
import Pagination from '../../components/Pagination'
import AuthContext from '../../context/AuthContext';

const Shop = () => {
  const [products,setProducts] = useState([]);
  const [data,setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const { setPath, price, setPrice } = useContext(AuthContext);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const showProducts = () => {

    axios.get('https://dummyjson.com/products?limit=100&skip=30')
    .then((response)=>{
     console.log('rrrrrr',response.data);
      const data = response.data.products;  
      const result =  data.filter(i =>
        i.category === 'womens-dresses' ||
        i.category === 'womens-shoes' ||
        i.category === 'womens-jewellery'
      )
      setProducts(result)
      setData(result)
      console.log('product',products)
    })
      .catch((err)=> {
        console.log("err", err)
      })
  }

  useEffect(() => {
    setPath('shop');
  }, []);

  useEffect(() => {
    setPrice(100);
  },[]);
    
  useEffect(() => {
    const result = products.filter((item) => {
      return item.price <= parseInt(price);
    });
    setData(result);
  },[price]);

  useEffect(() => {
    showProducts();
  }, []);

  return(
    <Grid container item  xs={12} md={10} justifyContent="center">
      {currentPosts.map((index,i)=>{
        return(
          <Product 
            id={index.id} 
            title={index.title} 
            image={index.images[0]} 
            price={index.price}  
            category={index.category}
            rating={4}
            item={index}
          />
        )})
      }
      <Pagination
        paginate={paginate}
        totalPosts={products.length}
        postsPerPage={postsPerPage}
      />
    </Grid>
  )
}

export default Shop;






/*
import React,{useState, useEffect} from 'react';
import { Grid,Button, Typography,Box,Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate,useParams,Link} from 'react-router-dom';
import axios from "axios";
import Product from '../components/Product/Product';
import Pagination from '../components/Pagination'

const GenderMenu =[
  {
    id: "a",
    title: "All"
  },
  {
    id: "m",
    title: "Men",
    category : "men's clothing"
  },
  {
    id: "w",
    title: "Woman",
    category : "women's clothing"
  },
  {
    id: "k",
    title: "Kids",
  },
  {
    id: "j",
    title: "Jewelry",
    category : "jewelery"
  },
];

const ColorMenu =[
  {
    id: "#fdd4ce",
    title: "#fdd4ce",
  },
  {
    id: "black",
    title: "black",
  },
  {
    id: "grey",
    title: "grey",
  },
  {
    id: "pink",
    title: "pink",
  },
  {
    id: "#c0809c",
    title: "#c0809c",
  },
  {
    id: "#db8f8d",
    title: "#db8f8d",
  },
  {
    id: "lightgray",
    title: "lightgray",
  },
];

const useStyles = makeStyles((theme) => ({
    ProductDetailContainer: {
      backgroundColor: 'rgb(255, 255, 255)'
    },
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
      marginSottom: '12px',
      fontFamily: 'Noto Sans JP, sans-serif'
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
    titleText:{
      fontSize: '30px',
      color: 'black',
      fontFamily: 'Noto Sans JP, sans-serif'
    },
    priceText:{
      fontSize: '24px',
      color: '#fe6c61',
      fontWeight:'bold'
    },
    descriptionText:{
      fontSize: '15px',
      color: 'grey',
      fontFamily: 'Noto Sans JP, sans-serif'
    },
    ProductDetailColorContainer:{
      marginTop: '20px',
      display: 'flex',
      //padding: '10px',
      alignItems:'center',
      '& $a':{
          cursor: 'pointer',
          display: 'flex',
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:'white',
          textDecoration:'none',
          color: 'black',
          width: '20px',
          height: '20px',
          marginLeft: '10px',
          borderRadius: '50%',
          border: '1px solid white',
          fontSize: '15px',
          '&:hover': {
            border: '1px solid black',
            color: 'white',
            backgroundColor: 'black'
          }
        },
    },
    ProductDetailTextId:{
      fontSize: '1rem',
      color: 'black',
      fontWeight:'bold'
    },
    ProductDetailColorItem:{
      cursor: 'pointer',
      display: 'block',
      border: 'none',
      width: '30px',
      height: '30px',
      marginLeft: '15px',
      marginBottom: '5px',
      borderRadius: '50%',
      '&:focus': {
        border: '2px solid #fe6c61',
        color: '#fe6c61'
      }
    },
    ProductDetailSizeItem:{
      cursor: 'pointer',
      display: 'block',
      width: '30px',
      height: '30px',
      marginLeft: '15px',
      marginBottom: '5px',
      '&:hover': {
        border: '1px solid #fe6c61',
        color: '#fe6c61'
      },
      '&:focus': {
        border: '2px solid #fe6c61',
        color: '#fe6c61',
        fontWeight:'bold'
      }
    },
    addCardContainer:{
      marginTop: '25px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      ['@media (max-width:780px)']: {
        flexWrap:"wrap",
     }
    },
    plusCard:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '120px',
      height: '45px',
      border: '1px solid lightgrey',
      ['@media (max-width:320px)']: {
        width:"100%",
     }
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
      fontSize: '1.3rem',
    },
    addCardButton:{
      cursor: 'pointer',
      backgroundColor: 'black',
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      marginLeft: '20px',
      height: '45px',
      color: 'white',
      fontSize: '14px',
      fontWeight:'bold',
      border:'none',
      '&:hover': {
        color: 'white',
        backgroundColor: 'black',
      },
     ['@media (max-width:320px)']: {
        width:"100%",
        marginLeft: '0px',
        marginTop: '20px',
     }
    },
    favoritCardButton:{
      cursor: 'pointer',
      backgroundColor: 'pink',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '45px',
      height: '45px',
      color: 'black',
      fontSize: '1.2rem',
      border:'none',
      marginLeft: '20px',
      '&:hover': {
        color: 'white'
      },
      ['@media (max-width:780px)']: {
        width:"100%",
        marginLeft: '0px',
        marginTop: '20px',
     }
    },
    ProductDetailTextShare:{
      fontSize: '14px',
      color: 'grey',
      fontWeight:200
    },
    gridContainer: {   
      display: "flex",
      justifyContent: "center",
    },
    gridFilter: {   
      padding: "0px 0px",
      marginBottom: "50px",
      paddingBottom: '50px',
      display: "flex",
      flexDirection: 'column',
      border: '1px solid lightgray'
    },
    filterHeader: {
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor:'black',
      height: 50,
      width: '100%',
      border: '1px solid lightgray'
    },
    filterHeaderTitle: {
      fontSize: '20px',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    activeMenu: {
      fontSize: '13px',
      color: '#0d6efd',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '20px',
      fontFamily: 'Noto Sans JP, sans-serif'
    },
    deactiveMenu: {
      fontSize: '13px',
      color: '#666',
      textTransform: 'uppercase',
      cursor: 'pointer',
      marginTop: '20px',
      fontFamily: 'Noto Sans JP, sans-serif',
      '&:hover': {
        color: '#0d6efd'
      },
    },
    MenuCategory: {
      marginTop: '20px',
      padding: '0px 15px',
      display: "flex",
      flexDirection: 'column',
      justifyContent: "center",
    },
    MenuCategoryColor: {
      width: '100%',
      display: "flex",
      flexWrap: 'wrap',
    },
    activeMenuColor: {
      cursor: 'pointer',
      marginRight: '10px',
      marginTop: '10px',
      border: '1px solid grey',
      width:20,
      height:20
    },
    deactiveMenuColor: {
      cursor: 'pointer',
      marginRight: '10px',
      marginTop: '10px',
      width:20,
      height:20,
      border: '1px solid transparent',
    },
  }));

const Shop = () => {
    const classes = useStyles();
    const [products,setProducts] = useState([]);
    const [data,setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [activeMenu, setActiveMenu] = useState('a');
    const [activeMenu1, setActiveMenu1] = useState('');
     // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

   //Filter for category
   const filterResult = (catItem) => {
    const result = products.filter((curDate) => {
        return curDate.category === catItem;
    });
    setData(result);
  };

    const showProducts = () => {
        axios.get("https://api.escuelajs.co/api/v1/categories/1/products?offset=10&limit=30") 
        //clothes 1 shose 4  ele 2
        .then((response)=>{
          console.log('product',response.data)
          setProducts(response.data)
          setData(response.data)
        })
        .catch((err)=>{
          console.log("err", err)
      })
    }

useEffect(() => {
    showProducts();
  }, []);


    return (
        <Grid container  className={classes.ProductDetailContainer}>
           <Grid item  xs={12} sm={12}  className={classes.ProductDetailHeader}>   
             <h1  className={classes.Title}>Shop</h1>
             <Box  className={classes.MenuDetailHeader}>
               <Link to='/' className={classes.Link}>Home</Link>
               <hr/>
               <Link to='#' className={classes.Link}>Shop</Link>
             </Box>
          </Grid>
          <Container>
          <Grid container style={{display:'flex',justifyContent:'space-between',marginTop:'50px'}}>
           <Grid item  xs={12} md={2} className={classes.gridFilter} > 
             <Box  className={classes.filterHeader}>
               <Typography className={classes.filterHeaderTitle}>Category</Typography>
             </Box>
             <Box className={classes.MenuCategory}>
             {GenderMenu.map((index) => (
               <Typography id={index.id}
                  className={ activeMenu == index.id ? 
                    `${classes.activeMenu}` : `${classes.deactiveMenu}`
                  }
                  onClick={() => {
                    if(index.id === 'a'){
                      setData(products);
                      setActiveMenu(index.id);
                    } else {
                      setActiveMenu(index.id);
                      filterResult(index.category);
                    }
                  }}
                >* {index.title}</Typography>
              ))}
             </Box>
             <Box className={classes.MenuCategory}>
             <Typography className={classes.activeMenu}>COLOR</Typography>
             <Box className={classes.MenuCategoryColor}>
             {ColorMenu.map((index) => (
              <>
                <Box 
                style={{backgroundColor:index.title}}
                className={ activeMenu1 == index.id ? 
                  `${classes.activeMenuColor}` : `${classes.deactiveMenuColor}`
                }
                onClick={() => { setActiveMenu1(index.id)}}
                />
                </>
              ))}
              </Box>
             </Box>
             <Box className={classes.MenuCategory}>
             <Typography className={classes.activeMenu}>PRICE</Typography>
             <Box className={classes.MenuCategoryColor}>
             {ColorMenu.map((index) => (
              <>
                <Box 
                style={{backgroundColor:index.title}}
                className={ activeMenu1 == index.id ? 
                  `${classes.activeMenuColor}` : `${classes.deactiveMenuColor}`
                }
                onClick={() => { setActiveMenu1(index.id)}}
                />
                </>
              ))}
              </Box>
             </Box>
           </Grid>  
          <Grid container item  xs={12} md={10} className={classes.gridContainer}>
          {
          currentPosts.map((index,i)=>{
            if(index.category)
              {
                return(
                  <Product 
                    id={index.id} 
                    title={index.title} 
                    image={index.images[0]} 
                    price={index.price}  
                    category={index.category.name}
                    rating={4}
                    item={index}
                  />
                )     
                }
             })
            }
         </Grid>
         </Grid>
         </Container>
         <Pagination
         paginate={paginate}
         totalPosts={products.length}
         postsPerPage={postsPerPage}
        />
        </Grid>
)}

export default Shop;


*/