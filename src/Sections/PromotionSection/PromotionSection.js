import React from 'react';
import { Link } from 'react-router-dom';
import { Grid,Button, Typography,Box,Container} from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PromotionSection.css';
import SeeMoreButton from '../../components/SeeMoreButton/SeeMoreButton';
import { ArrowRightAlt } from '@material-ui/icons';

  const items = [
    {
      price: '300',
      imageUrl: '/static/promotion/pro9.jpg',
    },
    {
      price: '400',
      imageUrl: '/static/promotion/pro10.jpg',
    },
    {
      price: '500',
      imageUrl: '/static/promotion/pro11.jpg',
    },
    {
      price: '600',
      imageUrl: '/static/promotion/pro12.jpg',
    },
    {
      price: '700',
      imageUrl: '/static/promotion/pro4.jpg',
    },
];

  const Item = (props) => {
    return (
      <div className="slickItemContainer">
        <img alt="kk" src={props.item.imageUrl}/>
        <div>
          <h1>${props.item.price}</h1>
          <button to="/shop">shop now</button>
        </div>
      </div> 
    );
  }

const  PromotionSection = () => {

  const PreviousArrow = ({ onClick }) => (
    <button className="buttonItem2 prev2" onClick={onClick}>
      <ArrowRightAlt style={{transform: 'rotate(180deg)'}} />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button className="buttonItem2 next2" onClick={onClick}>
      <ArrowRightAlt />
    </button>
  );


  return (
    <Grid xs={12} container className="promotionSContainer">
      <Grid item xs={12} md={6} className="itemContainer">
        <Slider 
          autoplay={true}
          dots={false}
          infinite={true}
          speed={1000}
          arrows={true}
          slidesToShow= {1}
          slidesToScroll= {1}
          prevArrow={<PreviousArrow />}
          nextArrow={<NextArrow />}
          className="slickCarousel"
        >
          {
            items.map((item, i) => 
              <Item key={i} item={item} /> 
            )
          }
        </Slider>
      </Grid>
      <Grid item xs={12} md={6} className="itemContainer">
        <div>
          <h2>Promotion</h2>
          <p>
            Finally, you need to provide an implementation of matchMedia to the useMediaQuery
            with the previously guessed characteristics. Using css-mediaquery to emulate matchMedia is recommended.
          </p>
          <SeeMoreButton title="see more" />
        </div>
      </Grid>
    </Grid>
  );
}

export default PromotionSection;