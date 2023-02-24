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
    width: '80%',
    margin: '0 auto',
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: '5px 10px',
    transition: 'all .5s',
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
      axios.get("https://fakestoreapi.com/products")
      .then((response)=>{
        console.log('product',response.data)
        setProducts(response.data)
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
                  <h6 style={{color:'black',margin: 20,backgroundColor:'pink'}}>
                    No results found
                  </h6>
                )
             }
          {
          filteredProduct.map((index,i)=>{
            return(
              <Product 
              id={index.id} 
              title={index.title} 
              image={index.image} 
              price={index.price}  
              category={index.category}
              rating={index.rating}
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
