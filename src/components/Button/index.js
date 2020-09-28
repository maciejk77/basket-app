import React, { useContext } from 'react';
import { StoreContext } from '../../Store';
import { ADD_ITEM } from '../../constants';
import { getItemPrice } from '../../utils';

const Button = ({ label }) => {
  const { dispatch } = useContext(StoreContext);
  const itemPrice = getItemPrice(label);
  return (
    <div
      value={label}
      style={styles.buttonStyles}
      data-testid="button"
      onClick={() =>
        dispatch({ type: ADD_ITEM, payload: label, price: itemPrice })
      }
    >
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
