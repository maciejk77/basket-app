import { createUseStyles } from 'react-jss';
export default createUseStyles(
  (theme) => ({
    subTotalStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      border: `2px solid ${theme.themeColour1}`,
      backgroundColor: theme.themeColour1,
      color: theme.baseColour,
      fontFamily: theme.themeFonts,
      padding: 10,
      width: 300,
    },
  }),
  { name: 'sub-total' }
);
