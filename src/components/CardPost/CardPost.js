import React, {useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"
import './CardPost.css';
import ReadMore from './ReadMore';

const CardPost = ({ imgUrl, title, date, description }) => {
  return (
    <div className="cardPostContainer">
      <div className="cardImageContainer">
        <img src={imgUrl} alt="img" />
      </div>
      <div className="cardBody">
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>
          {description.slice(0, 100)}
          <span>...</span>
        </p>
      </div>
      <div className="cardAction">
        <button>see more</button>
      </div>    
    </div>
  )
};

export default CardPost;
