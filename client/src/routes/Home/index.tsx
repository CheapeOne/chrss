import React from 'react';
import Navbar from './Navbar';
import styles from './styles.scss';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="columns">
        <div className="column"></div>
      </div>
    </>
  );
};

export default Home;
