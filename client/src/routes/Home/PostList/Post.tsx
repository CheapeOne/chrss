import React from 'react';
import styled from 'styled-components';
import { Box, Image, Text } from 'rebass';
import { IPost } from '../../../types/api.types';

interface Props {
  post: IPost;
}

const Post: React.FC<Props> = ({ post }) => {
  const handleClick = () => window.open(post.link, '_blank');

  return (
    <Wrapper onClick={handleClick}>
      <Box width={1 / 3}>
        <Image src={post.image} />
      </Box>
      <Box width={2 / 3} marginLeft="1rem">
        <Text fontSize={2} fontWeight="bold" lineHeight="17px">
          {post.title}
        </Text>
        <Text fontSize={1} marginTop="0.5rem" lineHeight="17px">
          {post.description}
        </Text>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 500px;
  cursor: pointer;
`;

export default Post;
