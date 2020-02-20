import React from 'react';
import Navbar from './Navbar';
import PostList from '#/components/PostList';
import mockPosts from '#/mocks/posts';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="columns">
        <div className="column">
          <PostList posts={mockPosts} />
        </div>
      </div>
    </>
  );
};

export default Home;
