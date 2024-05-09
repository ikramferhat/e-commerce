import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid,Button, Typography,Box,Container} from '@material-ui/core';
import './PrivacyPage.css';

const Privacy = () => {
  return (
    <Grid id="privacy">
      <Grid container xs={12} className="privacy-header">
        <h1>Privacy Policy</h1>
      </Grid>
      <Container maxWidth="md">
          <div className="privacy-Container">
            <h1>Privacy policy of ShopTemplate.com</h1>
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.</p>         
          </div>
      </Container>
    </Grid>
  );
};

export default Privacy;
