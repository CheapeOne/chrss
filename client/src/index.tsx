import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import Router from './Router';
import '#/styles/theme.global.scss';
import client from './gql';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

render(<App />, document.getElementById('root'));
