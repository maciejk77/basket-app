import React, { useContext } from 'react';
import { StoreContext } from '../../Store';
import { toDecimal } from '../../utils';

const TotalPay = ({ totalSavings }) => {
  const { state } = useContext(StoreContext);
  const toPay = toDecimal(state.subTotal - totalSavings);

  return (
    <div style={styles.totalPayStyle}>
      <div>Total to Pay</div>
      <div>{toPay ? `£${toPay}` : 'N/A'}</div>
    </div>
  );
};

const styles = {
  totalPayStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid red',
    padding: 10,
    width: 300,
    marginTop: 5,
  },
};

export default TotalPay;
