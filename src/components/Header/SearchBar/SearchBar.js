import React, {useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Search, Twitter, Instagram, Facebook} from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"
import Product from '../../Product/Product';

const useStyles = makeStyles((theme) => ({
  searchBar: {
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
    margin: '0 auto',
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: '5px 10px',
    transition: 'all .5s',
    zIndex: 20
  },
  iconConatiner: {
    cursor: "pointer",
    height: '0%',   
    marginLeft: 10,
  },
  closeSearch: {
    fontSize: 20,
    color: 'black',
    transition: "all 0.5s ease-out",
    "&:hover":{
      color: "red",
    },
  },
  inputSearch: {
    display: 'block',
    width: '90%',
    flex: 1,
    height: '30px',
    color: 'black',
    borderRadius: 0,
    border: 'none',
    backgroundColor: 'transparent',
    border: '1px solid white',
    '&:focus': {
      outline: 'none',
    }
  },
  resultContainer: {
    top: '100%',
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '300px',
    display: "flex",
    backgroundColor: 'white',
    boxShadow: '0 0 16px rgb(0 0 0 / 15%)',
    overflowY: 'scroll'
  },
  filtredProducts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    flex: 1,
    flexWrap: 'wrap',

  }
  }))
  
const SearchBar = ({ openSearchFunction, open }) => {
    const classes = useStyles();
    const [searchField, setSearchField] = useState("");
    const [products,setProducts] = useState([])

    const showProducts = () => {
      axios.get("https://dummyjson.com/products?limit=100")
      .then((response)=>{
        console.log('rrrrrr',response.data);
        const data = response.data.products;  
        const result =  data.filter(i =>
        i.category === 'womens-dresses' ||
        i.category === 'womens-shoes' ||
        i.category === 'womens-jewellery'
      )
        setProducts(result);
        console.log('product',products)
      })
      .catch((err)=>{
        console.log("err", err)
    })
  }

    const handleChangeSearch = e => {
      setSearchField(e.target.value);
    };



    const filteredProduct = products.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchField.toLowerCase())
        );
      }
    );
      
    useEffect(() => {
      showProducts();
    }, []);


    return (
        <div
        className={classes.searchBar}
        style={{display: !open && 'none'}}
        >
        <input
          placeholder='Search...'
          className={classes.inputSearch}
          onChange = {handleChangeSearch}
          value={searchField}
        />  
        <div className={classes.iconConatiner} onClick={()=> {openSearchFunction(); setSearchField('')}}>
          <CloseIcon className={classes.closeSearch}/>
        </div>  
        {searchField && (
          <div className={classes.resultContainer}>
            <div className={classes.filtredProducts}>
              {filteredProduct.length == 0 &&
                (
                  <h4 style={{color:'black',margin: 20}}>
                    No results found...
                  </h4>
                )
             }
          {
          filteredProduct.map((index,i)=>{
            return(
              <Product 
                id={index.id} 
                title={index.title} 
                image={index.images[0]} 
                price={index.price}  
                category={index.category}
            />
            )
            
          })      
          }
          </div>
        </div>  
          )} 
        </div>
    )
  };

export default SearchBar;
