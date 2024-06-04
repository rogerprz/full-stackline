import React from 'react';
import stackLineLogo from './../assets/stackline_logo.svg';

const headerStyles = { backgroundColor: 'navy', display: 'flex', alignItems: 'center', padding: '1rem', height: 60 };

const Header: React.FC = () => {
  return (
    <header className="header" style={headerStyles}>
      <img src={stackLineLogo} alt="Stackline logo" style={{ height: 40 }} />
    </header>
  );
};

export default Header;
