import { css } from 'linaria';
import React from 'react';
import { Plus, Settings } from 'react-feather';

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <div className={Wrapper}>
      <div>Feeds</div>
      <Plus />
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

export default Header;
