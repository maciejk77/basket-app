import React, { useContext } from 'react';
import { REMOVE_ITEM } from '../../constants';
import { StoreContext } from '../../Store';
import { toDecimal } from '../../utils';
import useStyles from './styles';
import Close from '../Close';

const Item = ({ name, index, price }) => {
  const { dispatch } = useContext(StoreContext);
  const { containerStyle, itemStyle, removeStyle } = useStyles();

  return (
    <div className={containerStyle}>
      <div data-testid="item" className={itemStyle}>
        <div>{name}</div>
        <div>{`£${toDecimal(price)}`}</div>
      </div>
      <Close
        data-testid="item-remove"
        className={removeStyle}
        onClick={() => dispatch({ type: REMOVE_ITEM, payload: index, price })}
      />
    </div>
  );
};

export default Item;
