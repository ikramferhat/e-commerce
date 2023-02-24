import React from 'react';
import { Box, Stack, Grid, Typography } from '@material-ui/core';
import { NavLink, useLocation, useNavigate, Link } from 'react-router-dom';
import { ourBlogData } from '../../DATA';
import './OurBlogSection.css'
import CardPost from '../../components/CardPost/CardPost';

const OurBlogSection = () =>{
  return(
    <Grid xs={12} container className="ourBlogSContainer" >
      {ourBlogData.map((row,key) => (
        key < 3 && (
        <Grid key={key} item xs={12} sm={6} md={4} className="ourBlogSItem">
          <CardPost
            imgUrl={row.imgUrl}
            title={row.title}
            date={row.date}
            description={row.description}
           />
        </Grid>
        )
      ))}
    </Grid>
  );
}

export default OurBlogSection;