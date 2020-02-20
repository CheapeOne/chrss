import React from 'react';
import { Post } from '#/types/api.types';
import { css } from 'linaria';
import LazyImage from '../LazyImage';

interface Props {
  post: Post;
}

const PostListItem: React.FC<Props> = ({ post }) => {
  return (
    <div className={wrapperClass}>
      <LazyImage src={post.image} className={imageClass} />
      <div className={detailsClass}>
        <div className="title is-4">{post.title}</div>
        <div>{post.description}</div>
        <div>{post.author}</div>
      </div>
    </div>
  );
};

const wrapperClass = css`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const imageClass = css`
  height: 100px;
  width: 100px;
  border-radius: 8px;
  transition: opacity 2s;
`;

const detailsClass = css`
  height: 100%;
  overflow: hidden;

  .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }
`;

export default PostListItem;
