import { css } from 'linaria';
import React from 'react';
import { List } from 'react-feather';
import { NavLink } from 'react-router-dom';
import AddFeedButton from './AddFeedButton';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className={Wrapper}>
      <div>Feeds</div>
      <div className={Right}>
        <AddFeedButton />
        <NavLink to="/feeds/manage" className={Link} activeClassName={Active}>
          <List />
        </NavLink>
      </div>
    </div>
  );
};

const Wrapper = css`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const Right = css`
  height: 1.5rem;
  display: flex;
  & > :not(:first-child) {
    margin-left: 0.5rem;
  }
`;

const Link = css`
  :hover {
    color: var(--primary);
  }
`;

const Active = css`
  color: var(--primary);
`;

export default Header;
