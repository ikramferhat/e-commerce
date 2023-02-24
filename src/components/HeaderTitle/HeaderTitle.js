import React,{useState, useEffect,useContext} from 'react';
import { Grid,Button, Typography,Box, Container} from '@material-ui/core';
import AuthContext from '../../context/AuthContext';
import './headerTitle.css';
import AppBreadcrumbs from './Breadcrumbs';

const HeaderTitle = ({title}) => {
  const { path } = useContext(AuthContext);

  return (
    <Grid item xs={12} className="headerTitlecontainer">   
      <h1>{path}</h1>
      <AppBreadcrumbs />
    </Grid>
  )
}

export default HeaderTitle;