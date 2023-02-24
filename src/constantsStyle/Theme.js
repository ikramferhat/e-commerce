import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme =  createMuiTheme({
  palette: {
    background: {
        primary: "#FFFFFF",
      },
    fontColor:{
        primary:"#1e1e27",
        secondary:"#fff"
    }
  },
});

export default theme