import React from 'react';
import { css } from 'linaria';

const Navbar: React.FC = () => {
  return (
    <div className={navClass}>
      <h1 className={`title ${headerClass}`}>/ chrss /</h1>
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
`;

export default Navbar;
