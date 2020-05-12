import { css } from 'linaria';
import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

const Navbar: React.FC = () => {
  return (
    <div className={Nav}>
      <div></div>
      <Link to="/">
        <h1 className={`title ${Header}`}>/ chrss /</h1>
      </Link>
      <div className={Right}>
        <NavMenu />
      </div>
    </div>
  );
};

const Nav = css`
  width: 100%;
  padding: 2rem;
  background: var(--primary);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

const Header = css`
  color: white;
  font-family: 'iosevka';
  font-style: italic;
  font-weight: bold;
  white-space: nowrap;
`;

const Right = css`
  justify-self: end;
`;

export default Navbar;
