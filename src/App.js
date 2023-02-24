import './App.css';
import { Container } from '@material-ui/core';
import Home from './pages/HomePage/HomePage';
import Shop from './pages/Shop/Shop';
import About from './pages/AboutPage/AboutPage';
import Contact from './pages/ContactPage/ContactPage';
import Blog from './pages/BlogPage/BlogPage';
import Cart from './pages/CartPage/CartPage';
import ProductDetail from './components/Product/ProductDetail';
import LoginSignup from './pages/AuthPage/AuthPage';
import Terms from './pages/TermsPage/TermsPage';
import Privacy from './pages/PrivacyPage/PrivacyPage';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import ShopLayout from './Layout/ShopLayout';
import Shose from './pages/Shop/Shose';
import Clothes from './pages/Shop/Clothes';
import Electronics from './pages/Shop/Electronics';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SocialButtons from './components/SocialMediaButton/SocialButtons';
import theme from './constantsStyle/Theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import { AuthProvider } from './context/AuthContext';

/*"sass": "^1.53.0",*/

function App() {
  return (
    <CartProvider>
    <MuiThemeProvider theme={theme}>
    <AuthProvider>
      <Router> 
      <Header />
      <ScrollToTop />
      <SocialButtons />
      <div className="container">
      <Routes>
          <Route path="/" element={<Home />}/>       
          <Route path="/cart" element={<Cart />}/>  
          <Route path="/contact" element={<Contact />}/>   
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>  
          <Route path="/user" element={<LoginSignup />}/>      
          <Route path="/terms" element={<Terms />}/>    
          <Route path="/privacy" element={<Privacy />}/>  
          <Route path="shop" element={<ShopLayout />} >
            <Route index element={<Shop />}/>
            <Route path="clothes" element={<Clothes />}/>
            <Route path="shoes" element={<Shose />}/> 
            <Route path="electronics" element={<Electronics />}/>  
          </Route>
          <Route path="/shop/:cat/:id"  element={<ProductDetail />}/>                    
      </Routes>
      </div>
      <Footer />
      </Router>
      </AuthProvider>
    </MuiThemeProvider>
    </CartProvider>
  );
}

export default App;
