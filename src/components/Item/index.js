import React, { useContext } from 'react';
import { REMOVE_ITEM } from '../../constants';
import { StoreContext } from '../../Store';

const Item = ({ name, index, price }) => {
  const { dispatch } = useContext(StoreContext);

  return (
    <div style={styles.containerStyle}>
      <div data-testid="item" style={styles.itemStyle}>
        <div>{name}</div>
        <div>{`£${(price / 100).toFixed(2)}`}</div>
      </div>
      <div
        style={styles.removeStyle}
        onClick={() => dispatch({ type: REMOVE_ITEM, payload: index })}
      >
        x
      </div>
    </div>
  );
};

const styles = {
  containerStyle: {
    display: 'flex',
  },
  itemStyle: {
    border: '1px solid black',
    padding: 10,
    width: 300,
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'space-between',
    height: '20px',
  },
  removeStyle: {
    marginLeft: 1,
    padding: 10,
    border: '1px solid black',
    height: '20px',
    width: '20px',
    textAlign: 'center',
  },
};

export default Item;