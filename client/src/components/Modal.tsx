import cn from 'classnames';
import { css } from 'linaria';
import React from 'react';

interface Props {
  active: boolean;
  close: () => void;
}

const Modal: React.FC<Props> = (props) => {
  const modalClass = cn('modal', {
    'is-active': props.active,
  });

  if (!props.active) {
    return null;
  }

  return (
    <div className={modalClass}>
      <div className="modal-background" onClick={props.close}></div>
      <div className="modal-content">
        <div className={Box}>{props.children}</div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.close}
      ></button>
    </div>
  );
};

const Box = css`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
`;

export default Modal;
