import { createUseStyles } from 'react-jss';
export default createUseStyles(
  (theme) => ({
    discountStyle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: `2px solid ${theme.themeColour1}`,
      backgroundColor: theme.themeColour0,
      fontFamily: theme.themeFonts,
      marginTop: 5,
      padding: 10,
      width: 300,
    },
    itemDiscountStyle: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    totalSavingsStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 5,
    },
  }),
  { name: 'discount' }
);
