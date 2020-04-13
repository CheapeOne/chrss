import cn from 'classnames';
import { css } from 'linaria';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useActiveTag } from '#/contexts/ActiveTagContext';
import { Tag, useTagsQuery } from '#/gql/codegen';
import TagItem from './TagItem';

interface Props { }

const Sidebar: React.FC<Props> = props => {
  const { data, loading, error } = useTagsQuery();
  const { activeTag, setActiveTag } = useActiveTag();

  const onItemClick = (tag: Tag) => {
    setActiveTag(tag);
  };

  const location = useLocation();
  const isActive = location.pathname === '/all-feeds';

  const buttonClass = cn('button', 'is-primary', {
    'is-light': !isActive,
  });

  if (!data || loading || error) {
    return null;
  }

  return (
    <div className={Wrapper}>
      <Link to="/all-feeds">
        <div className={buttonClass}>
          All Feeds
        </div>
      </Link>
      {data.tags.map(tag => (
        <TagItem
          tag={tag}
          onClick={onItemClick}
          isActive={tag.id === activeTag?.id}
          key={tag.id}
        />
      ))}
    </div>
  );
};

const Wrapper = css`
  width: 8rem;
`;

export default Sidebar;
