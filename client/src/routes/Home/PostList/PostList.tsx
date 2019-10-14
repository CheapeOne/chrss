import React from 'react';
import Post from './Post';
import { IPost } from '../../../types/api.types';

interface Props {
  posts: Array<IPost>;
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <Post post={post} />
      ))}
    </>
  );
};

export default PostList;
