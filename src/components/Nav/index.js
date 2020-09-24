import React, { Fragment } from 'react';
import Button from '../Button';

const Nav = ({ tabs }) => {
  return (
    <div style={{ display: 'flex' }}>
      {tabs.map((tab) => (
        <Button key={tab} label={tab} />
      ))}
    </div>
  );
};

export default Nav;
