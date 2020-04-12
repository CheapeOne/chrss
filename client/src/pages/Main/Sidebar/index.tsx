import React, { useContext } from 'react';
import ActiveTagContext from '#/contexts/ActiveTagContext';
import { Tag } from '#/types/api.types';
import { css } from 'linaria';
import TagItem from './TagItem';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  tags: Array<Tag>;
}

const Sidebar: React.FC<Props> = props => {
  const { activeTag, setActiveTag } = useContext(ActiveTagContext);

  const onItemClick = (tag: Tag) => {
    setActiveTag(tag);
  };

  const location = useLocation();
  const isActive = location.pathname === '/all-feeds';

  return (
    <div className={Wrapper}>
      <Link to="/all-feeds">
        <div
          className={cn('button', 'is-primary', {
            'is-light': !isActive,
          })}
        >
          All Feeds
        </div>
      </Link>
      {props.tags.map(tag => {
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

const Wrapper = css`
  width: 8rem;
`;

export default Sidebar;
