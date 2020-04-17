import { css } from 'linaria';
import React from 'react';
import { useFeedsQuery } from '#/gql/generated';
import FeedBlock from './FeedBlock';

interface Props {}

const FeedsManager: React.FC<Props> = (props) => {
  const { data, loading, error } = useFeedsQuery();

  if (loading) return <div className={Centered}>Loading...</div>;
  if (error || !data) return <div className={Centered}>Error!</div>;

  return (
    <div>
      <h2 className="title is-3">FeedManager</h2>
      <div>
        {data.feeds.map((feed) => (
          <FeedBlock feed={feed} key={feed.id} />
        ))}
      </div>
    </div>
  );
};

const Centered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FeedsManager;
