import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Home: React.FC = () => {
  return (
    <Page>
      <Logo />
    </Page>
  );
};

export default Home;

const Page = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
