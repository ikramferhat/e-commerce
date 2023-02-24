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
    title: "All"
  },
  {
    id: "electronics",
    title: "Electronics",
    category : "Electronics"
  },
  {
    id: "shoes",
    title: "Shoes",
    category : "Shoes"
  },
  {
    id: "clothes",
    title: "Clothes",
    category : "Clothes"
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
          return curDate.category.name === catItem;
      });
      setData(result);
    };

 /* const showProducts = () => {
    axios.get("https://fakestoreapi.com/products?limit=8")
    .then((response)=>{
      console.log('product',response.data)
      setProducts(response.data)
    })
    .catch((err)=>{
      console.log("err", err)
    })
  }*/

  const showProducts = () => {
    const rows = []
    axios.get("https://api.escuelajs.co/api/v1/products")
    .then((response)=>{
console.log('rrrrrr',response.data);
      let i = 0;
      while (rows.length < 10 ){
        if ((response.data[i].category.name !== 'Furniture') && (response.data[i].category.name !== 'Others')) {
          rows.push(response.data[i]);
        }
        i++;
      }
      setProducts(rows);
      setData(rows);
      console.log('product',products)
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
              className={activeMenu == index.id ? 'active' : 'deactive'}
              onClick={() => {
                if(index.id === 'all'){
                  setData(products);
                  setActiveMenu(index.id);
                } else {
                  setActiveMenu(index.id);
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
                category={index.category.name}
                rating={4}
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
