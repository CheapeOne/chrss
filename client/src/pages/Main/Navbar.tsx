import React from 'react';
import { css } from 'linaria';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className={Nav}>
      <Link to="/">
        <h1 className={`title ${Header}`}>/ chrss /</h1>
      </Link>
    </div>
  );
};

const Nav = css`
  width: 100%;
  padding: 2rem;
  background: var(--primary);
  display: flex;
  justify-content: center;
`;

const Header = css`
  color: white;
  font-family: 'iosevka';
  font-style: italic;
  font-weight: bold;
`;

export default Navbar;
