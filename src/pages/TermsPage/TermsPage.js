import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid,Button, Typography,Box,Container} from '@material-ui/core';
import './TermsPage.css';

const Terms = () => {
  return (
    <Grid id="terms">
      <Grid container xs={12} className="terms-header">
        <h1>Terms And Conditions</h1>
      </Grid>
      <Container maxWidth="md">
        <div className="terms-Container">
            <p>Terms of Use of ShopTemplate.com</p>
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.</p>
          </div>
      </Container>
    </Grid>
  );
};

export default Terms;
