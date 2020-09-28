import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    squareStyle: {
      backgroundColor: theme.baseColour,
      marginLeft: 5,
    },
    firstLineStyle: {
      height: 25,
      width: 5,
      marginLeft: 15,
      backgroundColor: theme.themeColour3,
      transform: 'rotate(45deg)',
      ZIndex: 1,
    },
    secondLineStyle: {
      height: 25,
      width: 5,
      backgroundColor: theme.themeColour3,
      transform: 'rotate(90deg)',
      ZIndex: 2,
    },
  }),
  { name: 'close' }
);
