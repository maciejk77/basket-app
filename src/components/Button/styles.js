import { createUseStyles } from 'react-jss';
export default createUseStyles(
  (theme) => ({
    buttonStyles: {
      border: `1px solid ${theme.themeColour2}`,
      padding: 10,
      width: 60,
      textAlign: 'center',
      marginRight: 10,
      borderRadius: 10,
      fontFamily: theme.baseFonts,
    },
  }),
  { name: 'button' }
);
