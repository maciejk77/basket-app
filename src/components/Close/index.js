import React from 'react';

import useStyles from './styles';

const Close = ({ onClick }) => {
  const { squareStyle, firstLineStyle, secondLineStyle } = useStyles();
  return (
    <div className={squareStyle} onClick={onClick}>
      <div className={firstLineStyle}>
        <div className={secondLineStyle}></div>
      </div>
    </div>
  );
};

export default Close;
