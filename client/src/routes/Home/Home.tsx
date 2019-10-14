import React from 'react';
import styled from 'styled-components';
import { Heading, Flex } from 'rebass/styled-components';
import PostList from './PostList';
import mockPosts from '../../mocks/posts';

const Home: React.FC = () => {
  return (
    <Page>
      <Flex justifyContent="center" mt="2rem" mb="3rem">
        <LogoTitle>chrss</LogoTitle>
      </Flex>
      <PostList posts={mockPosts} />
    </Page>
  );
};

export default Home;

const Page = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;

const LogoTitle = styled(Heading)`
  font-family: 'DM Serif Display', serif;
  color: ${({ theme }) => theme.dark};
  font-weight: normal;
  font-size: 4rem;
`;
