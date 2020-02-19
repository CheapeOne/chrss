import React, { useState } from 'react';
import { css } from 'linaria';

const Navbar: React.FC = () => {
  return (
    <div className={styles}>
      <h1 className={`title ${header}`}>chrss</h1>
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 2rem;
  background: var(--primary);
  text-align: center;
`;

const header = css`
  color: white;
`;

export default Navbar;
