import React from 'react';
import Button from '../Button';

const Nav = ({ tabs }) => {
  return (
    <div style={{ display: 'flex', marginBottom: 10 }} data-testid="nav">
      {tabs.map((tab) => (
        <Button key={tab} label={tab} />
      ))}
    </div>
  );
};

export default Nav;
