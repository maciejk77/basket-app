import React, { useContext } from 'react';
import { StoreContext } from '../../Store';
import { toDecimal } from '../../utils';
import useStyles from './styles';

const SubTotal = () => {
  const { state } = useContext(StoreContext);
  const { subTotalStyle } = useStyles();

  return (
    <div className={subTotalStyle} data-testid="sub-total">
      <div>Sub-total</div>

      <div>{`£${toDecimal(state.subTotal)}`}</div>
    </div>
  );
};

export default SubTotal;
