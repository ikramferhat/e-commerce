import React,{useState, useEffect} from 'react';
import {forwardRef, useImperativeHandle, useRef} from 'react';
import { TextField,IconButton, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import axios from "axios";
import { Visibility, VisibilityOff } from '@material-ui/icons';
import './auth.css';
import { Facebook } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  form: {
    display:'flex',
    flexDirection:'column',
    width: '70%',
    marginTop: 40,
    boxSizing: 'border-box',
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(3),
      width: '100%',
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid lightgrey"
    },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid #9d8d6c"
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "1px solid #9d8d6c"
    },
    "& .MuiFormLabel-root": {
      color: "#9d8d6c", 
      fontSize:"14px",
      fontFamily: "Montserrat, sans-serif",
      letterSpacing: "1px",
      fontWeight: 500,
      textTransform: "uppercase"
    },
    ['@media (max-width:780px)']: {
      width: '100%',
    } ,
    ['@media (max-width:375px)']: {
      "& .MuiFormLabel-root": {
        color: "#9d8d6c", 
        fontSize:"12px",
        fontFamily: "Montserrat, sans-serif",
        letterSpacing: "1px",
        fontWeight: 500,
        textTransform: "uppercase"
      }
    } 
  }
}))

const LoginForm = forwardRef(({ref}) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log('data', values);
    }
  });
  
  const { errors, touched, isSubmitting, getFieldProps, setFieldValue, resetForm } = formik;
  useImperativeHandle(ref, () => ({
    reset() {
      resetForm();
    }
  }));

  return(
    <FormikProvider value={formik}>
      <Form
        className={classes.form}
        autoComplete="off"
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <TextField
          name="email"
          label="Email"
          type="email"
          {...getFieldProps('email')}
          error={Boolean(touched.email && errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          {...getFieldProps('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          error={Boolean(touched.password && errors.password)}
          helperText={touched.password && errors.password}
        />
        <div className="auth-bottom">
          <div>
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
          <span>Forgot password?</span>
        </div>
        <button className="auth-button-submit" type="submit" onClick={onsubmit}>login</button>
      </Form>
    </FormikProvider>
  )
})

export default LoginForm;
