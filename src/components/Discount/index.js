import React, { useContext } from 'react';
import { StoreContext } from '../../Store';
import { getDiscounts, toDecimal } from '../../utils';

const Discount = () => {
  const { state } = useContext(StoreContext);

  const discountedItems = getDiscounts(state.basket);
  if (!discountedItems) return null;

  console.log(discountedItems);

  const totalSavings =
    discountedItems.length &&
    discountedItems
      .map((el) => el.itemDiscount)
      .reduce((acc, num) => acc + num);

  return (
    <div style={styles.discountStyle}>
      {discountedItems.map(({ itemDiscount, promoLabel }, idx) => (
        <div key={idx} style={styles.itemDiscountStyle}>
          <div>{promoLabel}</div>
          <div>{`-£${toDecimal(itemDiscount)}`}</div>
        </div>
      ))}
      <div style={styles.totalSavingsStyle}>
        <div>Total savings</div>
        <div>{totalSavings ? `-£${toDecimal(totalSavings)}` : 'N/A'}</div>
      </div>
    </div>
  );
};

const styles = {
  discountStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTop: '2px solid black',
    marginTop: 15,
    padding: 10,
    width: 300,
  },
  itemDiscountStyle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  totalSavingsStyle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default Discount;
