import React from 'react';
import '#/styles/bulma.scss';
import styles from './styles.scss';
import cn from 'classnames';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className={cn('title', styles.myTitle)}>Hello there</h1>
      <button className="button is-primary">Click Me!</button>
    </div>
  );
};

export default Home;
