import React from 'react';
import styled from 'styled-components';
import { Heading } from 'rebass/styled-components';
import PostList from './PostList';
import mockPosts from '../../mocks/posts';

const Home: React.FC = () => {
  return (
    <Page>
      <LogoTitle>chrss</LogoTitle>
      <PostList posts={mockPosts} />
    </Page>
  );
};

export default Home;

const Page = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LogoTitle = styled(Heading)`
  font-family: 'DM Serif Display', serif;
  color: ${({ theme }) => theme.dark};
  font-weight: normal;
  font-size: 4rem;
`;
