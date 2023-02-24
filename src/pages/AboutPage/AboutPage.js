import React, { useState } from 'react';
import { Typography, Grid, Paper, Container, Box } from '@material-ui/core';
import './AboutPage.css';
import vv from '../../images/about/video2.mp4';

const About = () => {
  return (
    <Grid id="about">
      <Grid container xs={12} className="about-header">
        <video src={vv} type='video/mp4' autoPlay loop muted />
        <div>
          <h1>About Us</h1>
        </div>
      </Grid>
      <Grid xs={10} sm={8} className="about-container">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            {' '}<a href="#">smileland.com</a>.
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
