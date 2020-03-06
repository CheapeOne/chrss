import React from 'react';
import { Tag } from '#/types/api.types';
import { css } from 'linaria';
import cn from 'classnames';

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
      className={cn({ [wrapperClass]: true, [activeClass]: isActive })}
      onClick={handleClick}
    >
      <span className={activeIconClass}>#</span>
      {tag.name}
    </div>
  );
};

const wrapperClass = css`
  font-family: 'iosevka';
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: var(--primary);
  }
`;

const activeIconClass = css`
  opacity: 0;
`;

const activeClass = css`
  color: var(--primary);
  font-style: italic;

  .${activeIconClass} {
    opacity: 1;
  }
`;

export default TagItem;
