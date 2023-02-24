import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  readORhead: {
    cursor: 'pointer',
    marginLeft: '10px',
    fontSize: '12px',
    color: '#096bdf'
  },
  text: {
    inlineSize: '100%',
    overflowWrap: 'break-word',
    fontSize: '14px'
  }
}));

const ReadMore = ({ children, nbrCara, colorText }) => {
  const classes = useStyles();
  const text = children;
  const textLength = text.length;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className={classes.text} style={{ color: colorText }}>
      {isReadMore ? text.slice(0, nbrCara) : text}
      {textLength > nbrCara && (
        <h6 onClick={toggleReadMore} className={classes.readORhead}>
          {isReadMore ? '...read more' : ' show less'}
        </h6>
      )}
    </div>
  );
}

export default ReadMore;