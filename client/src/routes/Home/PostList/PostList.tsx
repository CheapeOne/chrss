import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import { IPost } from '../../../types/api.types';
import { Flex } from 'rebass';

interface Props {
  posts: Array<IPost>;
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <Grid>
      {posts.map(post => (
        <Flex key={post.title} justifyContent="center">
          <Post post={post} />
        </Flex>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-row-gap: 28px;
`;

export default PostList;
