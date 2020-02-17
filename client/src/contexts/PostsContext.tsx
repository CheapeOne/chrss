import React, { createContext, useState } from 'react';
import { IPost } from '#/types/api.types';
import usePosts from '#/hooks/usePosts';

interface PostsContext {
  posts: Array<IPost>;
  loading: boolean;
  error: string;
}

const defaultValue = {
  posts: [],
  loading: false,
  error: '',
};

const { Provider, Consumer } = createContext<PostsContext>(defaultValue);

const PostsProvider: React.FC = props => {
  const { posts, error, loading } = usePosts();

  return (
    <Provider value={{ posts, error, loading }}>{props.children}</Provider>
  );
};

export { PostsProvider, Consumer };
