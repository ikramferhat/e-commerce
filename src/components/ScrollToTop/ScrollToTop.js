import React,{useState, useEffect} from 'react';
import { KeyboardArrowUp } from '@material-ui/icons';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 400) {
        setShowTopBtn(true);
      }else{
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      {" "}
        {showTopBtn && (
          <button onClick={goToTop} className="scrollTopButton">
            <KeyboardArrowUp className="icon" />
          </button>
        )}
      {" "}
    </>
  )
}

export default ScrollToTop;
