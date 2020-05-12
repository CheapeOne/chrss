import { css } from 'linaria';
import React from 'react';
import LazyImage from '#/components/LazyImage';
import { Post } from '#/gql/generated';

interface Props {
  post: Post;
}

const PostListItem: React.FC<Props> = ({ post }) => {
  const clippedTitle = getClippedTitle(post.title);

  return (
    <div className={wrapperClass}>
      <LazyImage src={post.image} className={imageClass} />
      <div className={detailsClass}>
        <div className="title is-size-6">{clippedTitle}</div>
        {post.description && <p>{post.description}</p>}
      </div>
    </div>
  );
};

function getClippedTitle(title: string) {
  if (title.length < 128) {
    return title;
  }

  return title.substring(0, 127) + '...';
}

const wrapperClass = css`
  min-height: calc(100px + 2rem);
  padding: 1rem;
  display: flex;
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
