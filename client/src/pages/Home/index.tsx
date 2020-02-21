import React from 'react';
import Navbar from './Navbar';
import PostList from '#/pages/Home/PostList';
import { ActiveTagProvider } from '#/contexts/ActiveTagContext';
import Sidebar from './Sidebar';
import { css } from 'linaria';

import mockPosts from '#/mocks/posts';
import mockTags from '#/mocks/tags';

const Home: React.FC = () => {
  return (
    <ActiveTagProvider>
      <Navbar />
      <div className={contentClass}>
        <div className="is-hidden-mobile">
          <Sidebar tags={mockTags} />
        </div>
        <div className={listWrapper}>
          <PostList posts={mockPosts} />
        </div>
      </div>
    </ActiveTagProvider>
  );
};

const contentClass = css`
  display: flex;
  justify-content: center;
`;

const listWrapper = css`
  width: 100%;
  max-width: 45rem;
`;

export default Home;
