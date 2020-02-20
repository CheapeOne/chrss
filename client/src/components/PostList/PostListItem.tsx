import React from 'react';
import { Post } from '#/types/api.types';
import { css } from 'linaria';
import LazyImage from '../LazyImage';

interface Props {
  post: Post;
}

const PostListItem: React.FC<Props> = ({ post }) => {
  return (
    <div className={styles}>
      <LazyImage src={post.image} />
      <div className="details">
        <div className="title is-4">{post.title}</div>
        <div>{post.description}</div>
        <div>{post.author}</div>
      </div>
    </div>
  );
};

const styles = css`
  height: 8rem;
  padding: 1rem;
  display: flex;
  align-items: center;

  img {
    height: 100%;
    border-radius: 8px;
    transition: opacity 2s;
  }

  .details {
    height: 100%;
    overflow: hidden;
  }

  .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }
`;

export default PostListItem;
