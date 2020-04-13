import React from 'react';
import { css } from 'linaria';
import { useFeedsQuery } from '#/gql/codegen';
import FeedBlock from './FeedBlock';

interface Props { }

const FeedsManager = (props: Props) => {
  const { data, loading, error } = useFeedsQuery();

  if (loading) return <div className={centeredClass}>Loading...</div>;
  if (error || !data) return <div className={centeredClass}>Error!</div>;

  return (
    <div>
      <h2 className="title is-3">All Feeds</h2>
      <div>
        {data.feeds.map(feed => (
          <FeedBlock feed={feed} />
        ))}
      </div>
    </div>
  );
};

const centeredClass = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FeedsManager;
