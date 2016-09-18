
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500, cyan700,
  redA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

export default getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: redA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
},
  {
    avatar: {
      borderColor: null,
    },
    tabs: {
      backgroundColor: 'transparent',
    },
    icon: {
      color: white,
    },
    radioButton: {
      checkedColor: redA200,
      borderColor: redA200,
    },
  });
