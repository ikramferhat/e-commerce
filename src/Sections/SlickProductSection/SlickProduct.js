import React,{useState, useEffect,useRef} from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Grid,Button, Typography,Box,Container} from '@material-ui/core';
import Slider from "react-slick";
import Product from '../../components/Product/Product';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlickProductSection.css';
import { ArrowRightAlt } from '@material-ui/icons';
import SeeMoreButton from '../../components/SeeMoreButton/SeeMoreButton';

export default function SlickProduct() {
  const [products,setProducts] = useState([]);
  const [sliderRef, setSliderRef] = useState([]);

  const PreviousArrow = ({ onClick }) => (
    <button className="buttonItem prev" onClick={onClick}>
      <ArrowRightAlt style={{transform: 'rotate(180deg)'}} />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button className="buttonItem" onClick={onClick}>
      <ArrowRightAlt />
    </button>
  );

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
      setProducts(result)
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
    <Grid xs={12}>
      <div className="buttonContainer">
        <div className="arrowContainer">
          <PreviousArrow onClick={sliderRef?.slickPrev} />
          <NextArrow onClick={sliderRef?.slickNext} />
        </div>
        <SeeMoreButton title="see more" />
      </div>
      <Slider 
        ref={setSliderRef}
        autoplay={false}
        dots={false}
        infinite={true}
        speed={500}
        arrows={false}
        slidesToShow= {1}
        slidesToScroll= {1}
        variableWidth= {true}
      >
        {products.map((index,i)=>{
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
      </Slider>
    </Grid>
  );
}