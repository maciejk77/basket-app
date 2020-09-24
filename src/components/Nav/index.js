import React from 'react';
import Button from '../Button';

const Nav = ({ tabs }) => {
  return (
    <div style={{ display: 'flex' }} data-testid="nav">
      {tabs.map((tab) => (
        <Button key={tab} label={tab} />
      ))}
    </div>
  );
};

export default Nav;
