import { css } from 'linaria';
import cn from 'classnames';
import React from 'react';
import { Tag } from '#/gql/codegen';

interface Props {
  isActive: boolean;
  onClick: (tag: Tag) => void;
  tag: Tag;
}

const TagItem: React.FC<Props> = ({ tag, onClick, isActive }) => {
  const handleClick = () => {
    onClick(tag);
  };

  return (
    <div
      className={cn(Wrapper, { [Active]: isActive })}
      onClick={handleClick}
    >
      <span className={ActiveIcon}>#</span>
      {tag.name}
    </div>
  );
};

const Wrapper = css`
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
  color: var(--primary);
  font-style: italic;

  .${ActiveIcon} {
    opacity: 1;
  }
`;

export default TagItem;
