import React,{useState, useEffect, useContext} from 'react';
import { Grid,Button, Typography,Box, Container} from '@material-ui/core';
import Rating from '@mui/material/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { Twitter, Instagram, Facebook} from '@material-ui/icons';
import {useNavigate,useParams,Link} from 'react-router-dom';
import axios from "axios";
import { useCart } from 'react-use-cart';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import AuthContext from '../../context/AuthContext';
import './productDetail.css';
import { Favorite } from '@material-ui/icons';


const color =[
    {
      id: "#f5edec"
    },
    {
      id: "#e6dfd7"
    },
    {
      id: "#16e2c8"
    },
    {
      id: "pink"
    }
];

const size =[
  {
    id: "s"
  },
  {
    id: "m"
  },
  {
    id: "l"
  },
  {
    id: "xl"
  }
];

const ProductDetail = () => {
  const [activeColor, setActiveColor] = useState("#f5edec");
  const [activeSize, setActiveSize] = useState('s');
  const { setPath } = useContext(AuthContext);
  const { addItem } = useCart();
  let {id} = useParams()
  const [oneproduct,setOneprodut]= useState([])
  const [val, setVal] = useState(1);

  const handleChange = event => {
    setVal(event.target.valueAsNumber);
  };

  const addProductFucntion = () =>{
    addItem(oneproduct, val)
  }

  const quantityIncrement = () =>{
    setVal(val + 1);
  }

  const quantityDecrement = () =>{
    if(val > 1){
      setVal(val - 1);
    }
  }

  const getSingle = (userid) => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${userid}`)
    .then((res)=>{
      setOneprodut(res.data);
    })
    .catch((error)=> console.log(error))
  }

  useEffect(() => {
    setPath('product details');
  }, []);

  useEffect(() => {
    if(id && id !== ""){
      getSingle(id);
    }
  },[id]);

  return (
    <Grid container className="productDetailContainer">
      <HeaderTitle />
      {oneproduct.length === 0 ? 
      ( 
        <h1>is loading ....</h1>
      ) : ( 
        <Container>
          <Grid  container className="cardProductContainer">
            <Grid item xs={12} sm={12} md={6}>  
              <div className="imageContainer">
                <img src={oneproduct.images[0]}/>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="productDetailInfo">      
              <p className="title">{oneproduct.title}</p>
              <Rating 
                name="half-rating"
                defaultValue={5}
                precision={0.5}
                readOnly
                size='small'
                style={{marginBottom: 20}}
              />
              <p className="price">${oneproduct.price}</p>
              <p className="description">{oneproduct.description}</p>
              <p className="categoryText">category: {oneproduct.category.id}</p>  
              <div className="categoryContainer color">
                <span>Color: </span>
                <div>
                  {color.map((index) => (
                    <button
                      className={activeColor === index.id ? 'activeButton' : 'deactiveButton'}
                      style={{ backgroundColor: index.id}}
                      onClick={()=> {setActiveColor(index.id)}}
                    />
                  ))}
                </div>
              </div>
              <div className="categoryContainer size">
                <span>Size: </span>
                <div>
                  {size.map((index) => (
                    <button
                      className={activeSize === index.id ? 'activeButton' : 'deactiveButton'}
                      onClick={()=> {setActiveSize(index.id)}}
                    >
                      {index.id}
                    </button> 
                  ))}
                </div>
              </div>
              <div className="buttonsContainer">
                <div className="quantityControl">
                  <button className="left" onClick={quantityDecrement}>-</button>
                  <input type="number" onChange={handleChange} value={val}/>
                  <button className="right" onClick={quantityIncrement}>+</button>
                </div>
                <button className="addCardButton" onClick={addProductFucntion}>add to cart</button>
                <button className="favoritCardButton"><Favorite className="icon" /></button>
              </div>
              <div className="iconContainer">
                <span>share on: </span>
                <a href='https://fr-fr.facebook.com/' >
                  <Facebook className="icon" />
                </a>
                <a href='https://www.instagram.com/?hl=fr' >
                  <Instagram className="icon" />
                </a>
                <a href='https://twitter.com/?lang=fr' >
                  <Twitter className="icon" />
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      )}
    </Grid>
)}

export default ProductDetail;


