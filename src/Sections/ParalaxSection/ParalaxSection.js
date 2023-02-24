import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Grid, Paper, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import img2 from '../../images/hero/hero2.jpg'


const useStyles = makeStyles((theme) => ({
  backgroundFixu: {
    height: '400px',
    width: '100%',
    backgroundImage: `url(${img2})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    //backgroundColor: 'black',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '100px 0px'
  },
}));

const ParalaxHome = () => {
  const classes = useStyles();
  return (
      <Grid item xs={12} className={classes.backgroundFixu}>
        <h1 className={classes.centerTitle}>About Us</h1>
      </Grid>
  );
};

export default ParalaxHome;
