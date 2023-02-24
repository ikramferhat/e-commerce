import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './TitleForSection.css';

const TitleForSection = (props) => {
    return (            
      <Grid  container xs={12} sm={12} className="titleScontainer">
        <h2>{props.title}</h2>
      </Grid>     
    )
}

export default TitleForSection;
