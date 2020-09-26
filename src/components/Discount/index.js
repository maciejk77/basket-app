import React, { useContext } from 'react';
import { StoreContext } from '../../Store';

const Discount = () => {
  const { state } = useContext(StoreContext);

  return (
    state.discountTotal > 0 && (
      <div style={styles.discountStyle}>
        <div>Total savings</div>

        <div>{`£${(state.discountTotal / 100).toFixed(2)}`}</div>
      </div>
    )
  );
};

const styles = {
  discountStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px dashed red',
    marginTop: 5,
    padding: 10,
    width: 300,
  },
};

export default Discount;
