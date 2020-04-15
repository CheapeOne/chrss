import { css } from 'linaria';
import React from 'react';
import { useTagsQuery } from '#/gql/generated';
import AllFeedsLink from './AllFeedsLink';
import Header from './Header';
import TagItem from './TagItem';

interface Props {}

const Sidebar: React.FC<Props> = () => {
  const { data, loading, error } = useTagsQuery();
  if (!data || loading || error) {
    return null;
  }

  return (
    <div>
      <Header />
      <div className={List}>
        <AllFeedsLink />
        {data.tags.map((tag) => (
          <TagItem tag={tag} key={tag.id} />
        ))}
      </div>
    </div>
  );
};

const List = css`
  & a {
    color: #777;
  }
`;

export default Sidebar;
