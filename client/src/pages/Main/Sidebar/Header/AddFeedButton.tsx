import { css } from 'linaria';
import React, { useState } from 'react';
import { PlusSquare } from 'react-feather';
import AddFeed from '#/components/forms/AddFeed';
import Modal from '#/components/Modal';
import useModalControls from '#/hooks/useModalControls';

interface Props {}

const AddFeedButton: React.FC<Props> = () => {
  const [modalActive, open, close] = useModalControls();

  const onSubmit = () => {};

  return (
    <div>
      <PlusSquare className={Button} onClick={open} />
      <Modal active={modalActive} close={close}>
        <AddFeed onSubmit={onSubmit} onCancel={close} />
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
