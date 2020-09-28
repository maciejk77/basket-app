import { createUseStyles } from 'react-jss';
export default createUseStyles(
  (theme) => ({
    totalPayStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      border: `2px solid ${theme.themeColour3}`,
      backgroundColor: theme.themeColour3,
      fontFamily: theme.themeFonts,
      padding: 10,
      width: 300,
      marginTop: 5,
    },
  }),
  { name: 'total-pay' }
);
