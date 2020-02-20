import React from 'react';
import { Post } from '#/types/api.types';
import { css } from 'linaria';
import LazyImage from '../../../components/LazyImage';

interface Props {
  post: Post;
}

const PostListItem: React.FC<Props> = ({ post }) => {
  return (
    <div className={wrapperClass}>
      <LazyImage src={post.image} className={imageClass} />
      <div className={detailsClass}>
        <div className="title is-size-6">{post.title}</div>
      </div>
    </div>
  );
};

const wrapperClass = css`
  height: calc(100px + 2rem);
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const imageClass = css`
  border-radius: 8px;
  transition: opacity 2s;
  margin-right: 1rem;
  height: 100px;
  width: 100px;
  flex: none;
`;

const detailsClass = css`
  height: 100%;
  overflow: hidden;
`;

export default PostListItem;
