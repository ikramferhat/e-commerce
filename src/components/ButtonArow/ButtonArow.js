import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./ButtonArow.css";
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  
    
    }));

const ButtonArow = (props) => {
    const classes = useStyles()

    return (
        <Button className="sqs-block-button-element--medium">
         {props.title}
         </Button>
    )
}

export default ButtonArow
