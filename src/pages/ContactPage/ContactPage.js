import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Map1 from '../../components/Map';
import './ContactPage.css';
import { Email, Home, Phone, Twitter, Instagram, Facebook } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  form: {
    display:'flex',
    flexDirection:'column',
    width: '90%',
    padding: 20,
    marginTop: 20,
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(3),
      width: '100%',
    },
    "& .MuiInput-underline:before": {
      borderBottom: "2px solid lightgrey"
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #9d8d6c"
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "2px solid #9d8d6c"
    },
    "& .MuiFormLabel-root": {
      color: "#9d8d6c", 
      fontSize:"14px",
      fontFamily: "Montserrat, sans-serif",
      letterSpacing: "1px",
      fontWeight: 500,
      textTransform: "uppercase"
    },
    ['@media (max-width:598px)']: {
      marginTop:"30px",
    } 
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid id="contact">
      <Grid container xs={12}>
        <Grid item xs={12} md={6} className="contact-backgroundFix">
          <h1>contact us</h1>
        </Grid>
        <Grid item container xs={12} md={6} className="contact-grid-form">
          <div className="contact-form-container">      
            <form className={classes.form}>                  
              <TextField
                name="fullname"
                label="Full Name"
                type="text"
              />
              <TextField
                name="email"
                label="Email"
                type="email"
              />
              <TextField
                label="Type your Message"
                multiline
                rows={4}
                maxRows={4}
              />                   
              <button type='submit'>
                SEND
              </button>
            </form> 
          </div>
        </Grid>
      </Grid>
      <Grid container xs={12}>    
        <Grid item xs={12} md={6} className="contact-grid-info">
          <div className="left-title-container">
            <h1>
              shoptemplate
            </h1>
          </div>
          <div className="info-container">
            <div>
              <Email className="icon" />
              <p>shop@email.com</p>
            </div>
            <div>
              <Home className="icon" />
              <p>shop/adress</p>
            </div>
            <div>
              <Phone className="icon" />
              <p>00.25.556.1452</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="contact-backgroundFix">
          <div className="contact-folow-container">
            <h1>folow us</h1>
            <div>
              <a><Facebook className="icon" /></a>
              <a><Instagram className="icon" /></a>
              <a><Twitter className="icon" /></a>        
            </div>
          </div>
        </Grid>
      </Grid>
      <Map1 />
      <Grid container xs={12} className="contact-backgroundFix"/>
    </Grid>
  );
};

export default Contact;


/*
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid,Button,ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../style/Contact.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'column',
    width: '90%',
    '& .MuiTextField-root': {
        marginBottom: theme.spacing(3),
        width: '100%',
    },
    "& .MuiFormLabel-root": {
        color: "#1e1e27", 
        fontSize:"14px"  
    },
    ['@media (max-width:598px)']: {
      marginTop:"30px",
    }

    },
  input: {
      '&:after':{
        borderBottom:"2px solid #1e1e27",
      },   
  },

  }));


const Contact = () => {
  const classes = useStyles();

  return(
  <div id="contact">
     <Grid container >   
       <Grid container xs={12} sm={12} className="GridContainer">
         <Grid container xs={12} sm={6} className="GridImage"/>
         <Grid item container xs={12} sm={6} className="GridForm">
          <Grid item xs={12} sm={12} className="SectionTitle">
            <h1>Contact Us</h1>
          </Grid>
        <Grid item container className='GridContactContainer' justifyContent="space-between"  xs={12} sm={12}>
        <Grid item xs={12} md={6}>
          <form className={classes.root}  noValidate autoComplete="off">                  
                    <TextField
                       name="fullname"
                       label="Full Name"
                       type="text"
                       InputProps={{
                        className: classes.input,
                       }}
                       />
                    <TextField
                       name="email"
                       label="Email"
                       type="email"
                       InputProps={{
                        className: classes.input,
                       }}
                       />
                    <TextField
                       label="Type your Message"
                       multiline
                       rows={4}
                       maxRows={4}
                       InputProps={{
                        className: classes.input,
                       }}
                       />                   
                    <button   
                        type='submit'
                        style={{marginTop:"10px"}}
                        variant="contained"
                        className={classes.button}
                        >SEND
                    </button>
            </form> 
            </Grid>
            <Grid item xs={12} md={5}>
           <div className="Informations">  
             <div className="Info">
               <div className="Title">
                 <i class="fas fa-envelope"></i>
                 <span>Email:</span>
               </div>
               <div className="Description">
                 ikramferhat2@gmail.com
               </div>
             </div>
             <div className="Info">
               <div className="Title">
                 <i class="fas fa-phone-alt"></i>
                 <span>Phone:</span>
               </div>
               <div className="Description">
                 +213791098242
               </div>
             </div>
           </div>
           </Grid>
            </Grid>  
          </Grid>
       </Grid>  
       
     </Grid>  
  </div>
  )
}
  
export default Contact;*/