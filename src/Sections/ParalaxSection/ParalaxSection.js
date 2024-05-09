import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './ParalaxSection.css'


const ParalaxHome = ({img,text}) => {
  return (
      <div item xs={12} style={{backgroundImage: `url(${img})`}} className="paralax">
        <p>{text}</p>
      </div>
  );
};

export default ParalaxHome;
