import React,{useState, useEffect, useContext} from 'react';
import { Grid,Container} from '@material-ui/core';
import {useNavigate,useParams,Link} from 'react-router-dom';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';
import { Outlet } from 'react-router-dom';
import './ShopLayout.css';
import AuthContext from '../context/AuthContext';

const GenderMenu =[
  {
    id: "all",
    title: "All",
    category : "/shop"
  },
  {
    id: "clothes",
    title: "Clothes",
    category : "/shop/clothes"
  },
  {
    id: "electronics",
    title: "Electronics",
    category : "/shop/electronics"
  },
  {
    id: "shoes",
    title: "Shoes",
    category : "/shop/shoes"
  }
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

const ShopLayout = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('all');
  const [activeMenu1, setActiveMenu1] = useState('');
  const { price, setPrice } = useContext(AuthContext);

  const handlePrice = (e)=>{
    setPrice( e.target.value );
  }
  
  return (
    <Grid className="shopLayout-container">
      <HeaderTitle />
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" className="shopLayout-Gridcontainer">
          <Grid item xs={12} md={2} className="shopLayout-filter-container"> 
            <div className="shopLayout-filterHeader">
              <h2>filter</h2>
            </div>
            <div className="shopLayout-menuCategory">
              <h3>category</h3>
              {GenderMenu.map((index,key) => (
                <p
                  key={key}
                  className={`shopLayout-item ${activeMenu == index.id ? "category-p-active" : "category-p-deactive"}`}
                  onClick={() => {
                    setActiveMenu(index.id);
                    navigate(index.category);
                  }}
                >
                  {index.title}
                </p>
              ))}
             </div>
            <div className="shopLayout-menuCategory">
              <h3>color</h3>
              <div className="shopLayout-colorFilter">
                {ColorMenu.map((index) => (
                  <div
                    style={{backgroundColor:index.title}}
                    className={ activeMenu1 == index.id ? "activeMenuColor" : "deactiveMenuColor"}
                    onClick={() => {setActiveMenu1(index.id)}}
                  />    
                ))}
              </div>
            </div>
            <div className="shopLayout-menuCategory">
              <h3>price</h3>
              <input
                type="range"
                min="0"
                value={price}
                max="1000"
                step="10"
                onInput={handlePrice}
              />
              <p className="priceInput">price $0 - ${price}</p>
            </div>
          </Grid>  
          <Outlet />
        </Grid>
      </Container>
    </Grid>
)}

export default ShopLayout;


