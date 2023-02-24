import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Grid, Paper, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import img2 from '../../images/hero/hero2.jpg'
import './VideoSection.css';
import vv from './video1.mp4';


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
  },
}));

const VideoSection = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} style={{ margin: '100px 0px' }}>
      <video src={vv} type='video/mp4' autoPlay loop muted />
    </Grid>
  );
};

export default VideoSection;
