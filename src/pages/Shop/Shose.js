import React,{useState, useEffect, useContext} from 'react';
import { Grid,Button, Typography,Box,Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate,useParams,Link} from 'react-router-dom';
import axios from "axios";
import Product from '../../components/Product/Product';
import Pagination from '../../components/Pagination';
import AuthContext from '../../context/AuthContext';

const Shose = () => {
  const [products,setProducts] = useState([]);
  const [data,setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const { setPath, price, setPrice } = useContext(AuthContext);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const showProducts = () => {
    axios.get("https://api.escuelajs.co/api/v1/categories/4/products?offset=10&limit=30") 
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
    setPath('shoes');
  }, []);

  useEffect(() => {
    setPrice(100);
  }, []);
  
  useEffect(() => {
    const result = products.filter((item) => {
      return item.price <= parseInt(price);
    });
    setData(result);
  }, [price]);

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
            category={index.category.name}
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

export default Shose;