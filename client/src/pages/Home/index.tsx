import React from 'react';
import Navbar from './Navbar';
import PostList from '#/pages/Home/PostList';
import mockPosts from '#/mocks/posts';
import { css } from 'linaria';
import cn from 'classnames';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="columns is-centered">
        <div className={cn('column', contentClass)}>
          <PostList posts={mockPosts} />
        </div>
      </div>
    </>
  );
};

const contentClass = css`
  max-width: 45rem;
`;

export default Home;
