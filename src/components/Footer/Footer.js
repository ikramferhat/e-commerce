import React from 'react';
import { Box, Stack, Grid, Typography } from '@material-ui/core';
import { NavLink, useLocation, useNavigate, Link } from 'react-router-dom';
import { Search, Twitter, Instagram, Facebook} from '@material-ui/icons';
import { footerData } from '../../DATA';
import './Footer.css'

const Footer = () =>{
  return (
    <>
      <Grid xs={12} container className="footerContainer">
        <Grid item xs={12} md={3} sm={12} className="logoContainer">
          <h1>shoptemplate</h1>
        </Grid>
        <Grid item container xs={12} md={9} sm={12} className="itemFContainer" >
        {footerData.map((row,key) => (
          <Grid key={key} item xs={12} sm={6} md={3} className="itemFooter">
            <h2>{row.title}</h2>
            {key != 4 ? (
              row.children.map((index) => (
                <div className="linkFContainer">
                  <Link to={index.path} className="linkF">
                    {index.title}
                  </Link>
                </div>
              ))
              ) : (
              <div className="iconFContainer">
                <a className="facebook">
                  <Facebook className="iconF" />
                </a>
                <a className="instagram">
                  <Instagram className="iconF" />
                </a>
                <a className="twitter">
                  <Twitter className="iconF" />
                </a>        
              </div>
            )}
          </Grid>
        ))}
        </Grid>
      </Grid>
      <Grid container xs={12} sm={12} className="copyright">
        <h6>© 2022 ikram ferhat template</h6>
      </Grid>
    </>
  );
}

export default Footer;