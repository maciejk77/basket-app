import React, { useContext } from 'react';
import { StoreContext } from '../../Store';
import { getDiscounts, toDecimal } from '../../utils';
import useStyles from './styles';

const Discount = () => {
  const { state } = useContext(StoreContext);
  const { discountStyle, itemDiscountStyle, totalSavingsStyle } = useStyles();
  const discountedItems = getDiscounts(state.basket);
  if (!discountedItems) return null;

  const totalSavings =
    discountedItems.length &&
    discountedItems
      .map((el) => el.itemDiscount)
      .reduce((acc, num) => acc + num);

  return (
    <div className={discountStyle} data-testid="discount">
      {discountedItems.map(({ itemDiscount, promoLabel }, idx) => (
        <div key={idx} className={itemDiscountStyle}>
          <div>{promoLabel}</div>
          <div>{`-£${toDecimal(itemDiscount)}`}</div>
        </div>
      ))}
      <div className={totalSavingsStyle}>
        <div>Total savings</div>
        <div>{totalSavings ? `-£${toDecimal(totalSavings)}` : 'N/A'}</div>
      </div>
    </div>
  );
};

export default Discount;
