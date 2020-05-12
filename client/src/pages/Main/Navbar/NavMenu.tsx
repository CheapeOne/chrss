import cn from 'classnames';
import { css } from 'linaria';
import React, { useState } from 'react';
import { ChevronDown, ChevronsDown } from 'react-feather';
import { useAuth } from '#/contexts/AuthContext';
import useClickOutside from './useClickOutside';

interface Props {}

const NavMenu: React.FC<Props> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const ref = useClickOutside(menuOpen, setMenuOpen);

  const { isAuthenticated, loginWithPopup, logout, user } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="button is-primary" onClick={loginWithPopup}>
        Log In
      </div>
    );
  }

  return (
    <div
      className={cn('dropdown is-right', { 'is-active': menuOpen })}
      onClick={() => setMenuOpen(!menuOpen)}
      ref={ref}
    >
      <div className="dropdown-trigger">
        <button
          className="button is-primary"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <ChevronsDown />
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">
            Account
          </a>
          <hr className="dropdown-divider" />
          <div
            className={cn('dropdown-item', Clickable)}
            onClick={() => logout}
          >
            Log out
          </div>
        </div>
      </div>
    </div>
  );
};

const Clickable = css`
  cursor: pointer;
`;

export default NavMenu;
