import React from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './Category.css';

const categories =[
    {
      name: 'dresses',
      url: '/shop/womens-dresses',
      imgUrl: 'https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?t=st=1715272465~exp=1715276065~hmac=e1ffb5527a6d886e402c9d3e74b5ff2441e59350eb5ba1dcb0f6c5e69a86fddf&w=360'
    },
    {
      name: 'shoes',
      url: '/shop/womens-shoes',
      imgUrl: 'https://img.freepik.com/free-photo/derby-shoes-men-formal-wear_53876-96609.jpg?t=st=1715272659~exp=1715276259~hmac=6cba3548e223dcba16c93e2dfb87e826000708320ec9f8063be13d9f638315ce&w=360'
    },
    {
      name: 'jewellery',
      url: '/shop/womens-jewellery',
      imgUrl: 'https://img.freepik.com/free-photo/display-shiny-luxurious-golden-chain_23-2149635256.jpg?t=st=1715272706~exp=1715276306~hmac=95d9e14954cf9b6df3508c58d5545087c83cf24bcea5ee15870b35bca3220387&w=360'
    }
];

const Category = () => {
  return (
    <Grid id="sh" container className="categorySectionContainer">
      {categories.map((index) => (
        <div className="categoryItem">
          <img src={index.imgUrl}/>
          <div className="overlay">
            <Link to={index.url} style={{textDecoration: 'none'}}>
              <div>
                <h1>{index.name}</h1>
              </div>
            </Link>
          </div>
      </div> 
    ))}
    </Grid>
  )
}

export default Category;
