import React,{useState, useEffect, useContext} from 'react';
import { Grid} from '@material-ui/core';
import axios from "axios";
import Product from '../../components/Product/Product';
import Pagination from '../../components/Pagination';
import AuthContext from '../../context/AuthContext';

const Electronics = () => {
  const [products,setProducts] = useState([]);
  const [data,setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const { setPath, price, setPrice } = useContext(AuthContext);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const showProducts = () => {
    axios.get('https://dummyjson.com/products/category/womens-jewellery') 
    .then((response)=>{
      console.log('product',response.data.products)
      setProducts(response.data.products)
      setData(response.data.products)
    })
    .catch((err)=>{
      console.log("err", err)
    })
  }

  useEffect(() => {
    setPath('jewellery');
  }, []);

  useEffect(() => {
    setPrice(100);
  }, []);
  
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
      {currentPosts.map((index,i)=> {
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

export default Electronics;