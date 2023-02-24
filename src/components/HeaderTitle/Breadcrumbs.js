import React, {useState} from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography
} from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  LinkStyle: {
    fontFamily: 'Montserrat, sans-serif',
    color: 'white',
    fontSize: 10,
    textDecoration: 'none',
    cursor: 'pointer',
    textTransform: 'uppercase',
    '&:hover': {
      color: 'lightgray'
    }
  },
  TextStyle: {
    fontFamily: 'Montserrat, sans-serif',
    color: 'white',
    fontSize: 10,
    textTransform: 'uppercase',
  }
}))

const AppBreadcrumbs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(Boolean);
  const classes = useStyles();

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" style={{color: 'white'}}>
      {pathnames.length ? (
        <Link style={{textDecoration: 'none'}} className={classes.LinkStyle} onClick={() => navigate("/")}>
          Home
        </Link>
      ) : (
        <Typography  className={classes.TextStyle}> Home </Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography  className={classes.TextStyle} key={name}>{name}</Typography>
        ) : (
          <Link
            style={{textDecoration: 'none'}}
            className={classes.LinkStyle}
            key={name}
            onClick={() => navigate(routeTo)}
          >
            {name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default AppBreadcrumbs;