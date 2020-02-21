import React, { useContext } from 'react';
import ActiveTagContext from '#/contexts/ActiveTagContext';
import { Tag } from '#/types/api.types';
import { css } from 'linaria';
import TagItem from './TagItem';

interface Props {
  tags: Array<Tag>;
}

const Sidebar: React.FC<Props> = ({ tags }) => {
  const { activeTag, setActiveTag } = useContext(ActiveTagContext);

  const onItemClick = (tag: Tag) => {
    setActiveTag(tag);
  };

  return (
    <div className={wrapperClass}>
      {tags.map(tag => {
        const isActive = tag.id === activeTag?.id;

        return (
          <TagItem
            tag={tag}
            onClick={onItemClick}
            isActive={isActive}
            key={tag.id}
          />
        );
      })}
    </div>
  );
};

const wrapperClass = css`
  width: 8rem;
  margin-top: 1rem;
`;

export default Sidebar;
