import React,{useState, useEffect} from 'react'
import axios from "axios"
import {makeStyles } from '@material-ui/core/styles';
import { Grid,Button, Container} from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import Product from './Product'
import SeeMoreButton from '../SeeMoreButton/SeeMoreButton';
import './ListProducts.css';

const category =[
  {
    id: "all",
    title: "All",
    category : "all"

  },
  {
    id: "dresses",
    title: "dresses",
    category : "womens-dresses"
  },
  {
    id: "shoes",
    title: "Shoes",
    category : "womens-shoes"
  },
  {
    id: "jewellery",
    title: "Jewellery",
    category : "womens-jewellery"
  },
];
//"Electronics" "Shoes"  "Clothes"

const ProductList = () => {
  const navigate = useNavigate();
  const [products,setProducts] = useState([])
  const [data,setData] = useState([])
  const [activeMenu, setActiveMenu] = useState('all');

     //Filter for category
     const filterResult = (catItem) => {
      const result = products.filter((curDate) => {
          return curDate.category === catItem;
      });
      setData(result);
    };



  const showProducts = () => {
    const rows = []
    axios.get('https://dummyjson.com/products?limit=100&skip=40')
    .then((response)=>{
     console.log('rrrrrr',response.data);
      const data = response.data.products;  
      const result =  data.filter(i =>
        i.category === 'womens-dresses' ||
        i.category === 'womens-shoes' ||
        i.category === 'womens-jewellery'
      )
      setProducts(result);
      setData(result);
      console.log('product====>',products)
    })
    .catch((err)=>{
      console.log("err", err)
    })
  }

  useEffect(() => {
    showProducts();
  }, []);

  return (
    <Grid className="listProductContainer">
      <Grid container xs={12} className="genderCategoryContainer">
        <div className="genderCategory" >
          {category.map((index) => (
            <button
              className={activeMenu == index.category ? 'active' : 'deactive'}
              onClick={() => {
                if(index.category === 'all'){
                  setData(products);
                  setActiveMenu(index.category);
                }else{
                  setActiveMenu(index.category);
                  filterResult(index.category);
                }
              }}
            >
              {index.title}
            </button>
          ))}
        </div>
      </Grid>
      <Grid container xs={12} className="list">
        {data.map((index,i)=>{
          return(
              <Product 
                id={index.id} 
                title={index.title} 
                image={index.images[0]} 
                price={index.price}  
                category={index.category}
                rating={index.rating}
                item={index}
                isSold={i == 2 || i == 6 && true}
            />
          )     
        })}
      </Grid>
      <Grid container xs={12} className="list bottomButton" >
        <SeeMoreButton title="see more" onClick={()=> navigate('/shop')} />
      </Grid>
    </Grid>
  );
}

export default ProductList


/*  <Product 
              id={index.id} 
              title={index.title} 
              image={index.image} 
              price={index.price}  
              category={index.category}
              rating={index.rating}
              item={index}
              isSold={index.id === 2 && true}
            />
            */
