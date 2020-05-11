import React from 'react';
import mockPosts from '#/mocks/posts';
import PostList from './PostList';

const PostsPane: React.FC = () => {
  return <PostList posts={mockPosts} />;
};

export default PostsPane;
