import React, { useContext } from 'react';
import { StoreContext } from '../../Store';
import { mapBasketItems, getSubTotal } from '../../utils';

const SubTotal = () => {
  const { state } = useContext(StoreContext);
  const mappedBasket = mapBasketItems(state.basket);
  const subTotal = getSubTotal(mappedBasket);
  return (
    subTotal > 0 && (
      <div style={styles.subTotalStyle}>
        <div>Sub-total</div>
        <div>{`£${(subTotal / 100).toFixed(2)}`}</div>
      </div>
    )
  );
};

const styles = {
  subTotalStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px dashed black',
    padding: 10,
    width: 300,
  },
};

export default SubTotal;
