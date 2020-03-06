import React from 'react';
import Navbar from './Navbar';
import PostList from '#/pages/Home/PostList';
import { ActiveTagProvider } from '#/contexts/ActiveTagContext';
import Sidebar from './Sidebar';
import { css } from 'linaria';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import mockPosts from '#/mocks/posts';
import mockTags from '#/mocks/tags';

const POSTS = gql`
  {
    posts(order_by: { created_at: asc }, limit: 10) {
      id
      title
      url
      description
      feed_id
      image
      published_at
    }
  }
`;

const Home: React.FC = () => {
  // const { loading, error, data } = useQuery(POSTS);
  const loading = false;
  const error = false;
  const data = { posts: [] };
  if (loading) return <div>LOADING</div>;
  if (error) return <div>ERROR</div>;

  return (
    <ActiveTagProvider>
      <Navbar />
      <div className={contentClass}>
        <div className="is-hidden-mobile">
          <Sidebar tags={mockTags} />
        </div>
        <div className={listWrapper}>
          <PostList posts={data.posts} />
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
