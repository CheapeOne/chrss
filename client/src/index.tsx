import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import '#/styles/bulma.global.scss';
import '#/styles/theme.scss';

const App: React.FC = () => {
  return <Router />;
};

ReactDOM.render(<App />, document.getElementById('root'));
