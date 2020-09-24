import React from 'react';

const Button = ({ label }) => {
  return (
    <div style={styles.buttonStyles} data-testid="button">
      {label}
    </div>
  );
};

const styles = {
  buttonStyles: {
    border: '1px solid black',
    padding: 10,
    width: 60,
    textAlign: 'center',
    marginRight: 10,
  },
};

export default Button;
