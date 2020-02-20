import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import '#/styles/theme.global.scss';

const App: React.FC = () => {
  return <Router />;
};

ReactDOM.render(<App />, document.getElementById('root'));
