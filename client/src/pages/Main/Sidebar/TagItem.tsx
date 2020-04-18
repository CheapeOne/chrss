import { css } from 'linaria';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tag } from '#/gql/fragments';

interface Props {
  tag: Tag;
}

const TagItem: React.FC<Props> = ({ tag }) => {
  const link = `/tags/${tag.name}/${tag.id}`;

  return (
    <NavLink to={link} className={Wrapper} activeClassName={Active}>
      <span className={ActiveIcon}>#</span>
      {tag.name}
    </NavLink>
  );
};

const Wrapper = css`
  display: block;
  font-family: 'iosevka';
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: var(--primary);
  }
`;

const ActiveIcon = css`
  opacity: 0;
`;

const Active = css`
  color: var(--primary) !important;
  font-style: italic;

  .${ActiveIcon} {
    opacity: 1;
  }
`;

export default TagItem;
