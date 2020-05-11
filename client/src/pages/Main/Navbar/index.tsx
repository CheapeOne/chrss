import { css } from 'linaria';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

const Navbar: React.FC = () => {
  return (
    <div className={Nav}>
      <Link to="/">
        <h1 className={`title ${Header}`}>/ chrss /</h1>
      </Link>
      <div className={Right}>
        <LoginButton />
      </div>
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

const Right = css`
  margin-left: auto;
`;

export default Navbar;
