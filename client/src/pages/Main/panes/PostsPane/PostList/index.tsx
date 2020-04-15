import React from 'react';
import { Post } from '#/gql/generated';
import PostListItem from './PostListItem';

interface Props {
  posts: Array<Post>;
}

const PostList: React.FC<Props> = props => {
  return (
    <div>
      {props.posts.map(post => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
