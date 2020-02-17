import React from 'react';
import styles from './styles.scss';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={`title ${styles.myTitle}`}>chrss</h1>
    </div>
  );
};

export default Navbar;
