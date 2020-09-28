import React, { useContext } from 'react';
import { StoreContext } from '../../Store';
import { toDecimal } from '../../utils';

const SubTotal = () => {
  const { state } = useContext(StoreContext);

  return (
    <div style={styles.subTotalStyle} data-testid="sub-total">
      <div>Sub-total</div>

      <div>{`£${toDecimal(state.subTotal)}`}</div>
    </div>
  );
};

const styles = {
  subTotalStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid black',
    padding: 10,
    width: 300,
  },
};

export default SubTotal;
