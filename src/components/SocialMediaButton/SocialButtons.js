import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Twitter, Instagram, Facebook} from '@material-ui/icons';
import './SocialButtons.css';

const SocialButtons = () => {
  return (
    <div className="containerSocial">
      <a href='https://fr-fr.facebook.com/' >
        <Facebook className="icon" />
      </a>
      <a href='https://www.instagram.com/?hl=fr' >
        <Instagram className="icon" />
      </a>
      <a href='https://twitter.com/?lang=fr' >
        <Twitter className="icon" />
      </a>
    </div>
  )
}

export default SocialButtons
