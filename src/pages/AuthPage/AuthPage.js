import React,{useState, useEffect, useRef, useContext} from 'react';
import { Grid, Container } from '@material-ui/core';
import SignUpForm from '../../components/Form/SignUpForm';
import LoginForm from '../../components/Form/LoginForm';
import AuthContext from '../../context/AuthContext';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import './AuthPage.css';

const LoginSignup = () => {
  const breakpoint = 780;
  const { setPath } = useContext(AuthContext);
  const [login, setLogin] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const childRef = useRef(null);
  const childRef1 = useRef(null);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    setPath('user');
  },[]);

  const handleChangeForm = () => {
    setLogin(!login);
    childRef.current.reset();
    childRef1.current.reset();
  };
  
  return(
    <Grid id="auth">
      <HeaderTitle />
      <Container maxWidth="md" className="auth-container">
        <Grid container>
          <Grid xs={12} className="auth-gridContainer">
            <div 
              className="auth-formContainer"
              style={{
                left: (login && width > breakpoint) && '100%',
                transform: (login && width > breakpoint) && 'translate(-100%, 0)'
              }}
            >
              <h1>{login? 'Login' : 'Sign Up'}</h1>
              {login? <LoginForm ref={childRef1}/> : <SignUpForm ref={childRef}/> }   
              <div className="auth-mobile-box">
                <p>
                  {login? "Don't have an account?" : "Alredy have an account?" }
                  <span onClick={handleChangeForm}>{login? 'Sign Up' : 'Login' }</span>
                </p>
              </div>   
            </div>
            <div
              className="auth-banner"
              style={{
                right: (login && width > breakpoint) && '100%',
                transform: (login && width > breakpoint) && 'translate(100%, 0)',
              }}
             >
              <h1>{login? "Don't have an account?" : "Already have an account?"}</h1>
              <button onClick={handleChangeForm}>{login? 'Sign Up' : 'Login' }</button>
            </div>   
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}
export default LoginSignup;
