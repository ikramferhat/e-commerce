import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Grid, Paper, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import k2 from '../../images/about/about4.jpg';
import m from '../../images/about/ab.jpg';
import './BlogPage.css';
import { ourBlogData } from '../../DATA';

const useStyles = makeStyles((theme) => ({
  backgroundFixu: {
    height: '500px',
    width: '100%',
    //backgroundImage: `url(${img2})`,
    //backgroundSize: 'cover',
    //backgroundAttachment: 'fixed',
    backgroundColor: 'black',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerTitle: {
    fontSize: '37px',
    fontWeight: 500,
    color: 'white',
    marginTop: 50
  },
  gridCenterContainer: {
    backgroundColor: 'white',
    margin: '0 auto',
    marginTop: -150,
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: "0 0 16px rgb(0 0 0 / 15%)"
  },
  descriptionText: {
    padding: 30
  },
  text: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '2rem',
    color: '#4c494a',
    marginTop: 10,
    fontFamily: 'Noto Sans JP, sans-serif',
    '& a': {
      color: '#39B3BA'
    }
  },
  Overlay: {
    height: '200px',
    width: '100%'
  },
  backgroundAbout: {
    width: '100%',
    height: '100%',
    //height: "100%",
    //minHeight: '400px',
    objectFit:'cover'
  }
}));

const Blog = () => {
  return (
    <Grid  className="containerPage">
      <Grid item xs={12} className="backgroundFix">
        <div>
          <h1>our blog</h1>
        </div>
      </Grid>
      <Container>
      <Grid xs={12}>
        <Grid container xs={12} md={10} className="postContainer">
          <Grid item xs={12} md={4} className="boxPostImage imageborder">
            <img src={ourBlogData[0].imgUrl} alt="img" />
          </Grid>
          <Grid item xs={12} md={8} className="boxPostInfo">
            <div className='boxPostInfoLeft'>
              <h1>{ourBlogData[0].title}</h1>
              <p>{ourBlogData[0].description}</p>
            </div>
          </Grid>
        </Grid>
        <Grid container xs={12} md={10} className="postContainer postContainerBorder">
          <h1 className="logoTop-left">ShopTemplate</h1>
          <Grid item xs={12} md={4} className="boxPostImage">
            <img src={ourBlogData[2].imgUrl} alt="img" />
          </Grid>
          <Grid item xs={12} md={8} className="boxPostInfo">
            <div>
              <h1>{ourBlogData[2].title}</h1>
              <p>{ourBlogData[2].description}</p>
            </div>
          </Grid>
        </Grid>
        <Grid container xs={12} md={10} className="postContainer postContainerBorderTop">
          <h1 className="logoTop-center">Intagram</h1>
          <Grid item xs={12} className="boxPostImage lastSection">
            {ourBlogData.map((row,key) => (
              <div>
                <img src={row.imgUrl} alt="img" />
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </Container>
    </Grid>
  );
};

export default Blog;
