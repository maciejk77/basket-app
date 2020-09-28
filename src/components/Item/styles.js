import { createUseStyles } from 'react-jss';
export default createUseStyles(
  (theme) => ({
    containerStyle: {
      display: 'flex',
    },
    itemStyle: {
      border: `1px solid ${theme.themeColour3}`,
      background: theme.themeColour4,
      fontFamily: theme.themeFonts,
      padding: 10,
      width: 300,
      marginBottom: 5,
      display: 'flex',
      justifyContent: 'space-between',
      height: '20px',
    },
    removeStyle: {
      marginLeft: 1,
      padding: 10,
      border: `1px solid ${theme.themeColour3}`,
      background: theme.themeColour0,
      height: '20px',
      width: '20px',
      textAlign: 'center',
    },
  }),
  { name: 'item' }
);
