import React, { useContext } from 'react';
import { StoreContext } from '../../Store';
import { toDecimal } from '../../utils';

const SubTotal = () => {
  const { state } = useContext(StoreContext);

  return (
    state.subTotal > 0 && (
      <div style={styles.subTotalStyle}>
        <div>Sub-total</div>

        <div>{`£${toDecimal(state.subTotal)}`}</div>
      </div>
    )
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
