import React from 'react'
import { ArrowRightAlt } from '@material-ui/icons';
import './SeeMoreButton.css';

const SeeMoreButton = ({onClick, title}) => {
  return (            
    <button onClick={onClick} className="seeMoreButton">
      <span>{title}</span>
      <ArrowRightAlt className="icon"/>
    </button>       
  )
}

export default SeeMoreButton;
