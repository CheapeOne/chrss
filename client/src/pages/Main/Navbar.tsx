import React from 'react';
import { css } from 'linaria';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className={navClass}>
      <Link to="/">
        <h1 className={`title ${headerClass}`}>/ chrss /</h1>
      </Link>
    </div>
  );
};

const navClass = css`
  width: 100%;
  padding: 2rem;
  background: var(--primary);
  text-align: center;
`;

const headerClass = css`
  color: white;
  font-family: 'iosevka';
  font-style: italic;
  font-weight: bold;
`;

export default Navbar;