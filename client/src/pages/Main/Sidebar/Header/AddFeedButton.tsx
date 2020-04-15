import { css } from 'linaria';
import React, { useState } from 'react';
import { PlusSquare } from 'react-feather';
import AddFeed from '#/components/forms/AddFeed';
import Modal from '#/components/Modal';

interface Props {}

const AddFeedButton: React.FC<Props> = (props) => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div>
      <PlusSquare
        className={Button}
        onClick={(): void => setModalActive(true)}
      />
      <Modal active={modalActive} close={(): void => setModalActive(false)}>
        <div>Ahhh!</div>
        <AddFeed />
      </Modal>
    </div>
  );
};

const Button = css`
  cursor: pointer;

  :hover {
    color: var(--primary);
  }
`;

export default AddFeedButton;
