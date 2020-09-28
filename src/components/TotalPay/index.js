import React, { useContext } from 'react';
import { StoreContext } from '../../Store';
import { toDecimal } from '../../utils';
import useStyles from './styles';

const TotalPay = ({ totalSavings }) => {
  const { state } = useContext(StoreContext);
  const toPay = toDecimal(state.subTotal - totalSavings);
  const { totalPayStyle } = useStyles();
  return (
    <div className={totalPayStyle}>
      <div>Total to Pay</div>
      <div>{toPay ? `£${toPay}` : 'N/A'}</div>
    </div>
  );
};

export default TotalPay;
