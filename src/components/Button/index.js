import React, { useContext } from 'react';
import { StoreContext } from '../../Store';
import { ADD_ITEM } from '../../constants';
import { getItemPrice } from '../../utils';
import useStyles from './styles';

const Button = ({ label }) => {
  const { dispatch } = useContext(StoreContext);
  const { buttonStyles } = useStyles();
  const itemPrice = getItemPrice(label);
  return (
    <div
      value={label}
      className={buttonStyles}
      data-testid="button"
      onClick={() =>
        dispatch({ type: ADD_ITEM, payload: label, price: itemPrice })
      }
    >
      {label}
    </div>
  );
};

export default Button;
