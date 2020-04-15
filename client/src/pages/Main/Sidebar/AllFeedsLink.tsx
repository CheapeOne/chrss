import cn from 'classnames';
import { css } from 'linaria';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const AllFeedsLink: React.FC = () => {
  const location = useLocation();
  const isAllFeeds = location.pathname === '/';
  const Button = cn(Wrapper, { [Active]: isAllFeeds });

  return (
    <NavLink to="/">
      <div className={Button}>
        <span className={ActiveIcon}>#</span>
        All Feeds
      </div>
    </NavLink>
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

export default AllFeedsLink;
