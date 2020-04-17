import { css } from 'linaria';
import React from 'react';

interface Props {
  onSubmit: () => void;
  onCancel: () => void;
}

const AddFeed: React.FC<Props> = (props) => {
  return (
    <>
      <h3 className="title is-4">Add Feed</h3>
      <input
        className="input is-rounded"
        type="text"
        placeholder="https://example.com"
      ></input>
      <div className={Buttons}>
        <button className="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="button is-primary" onClick={props.onSubmit}>
          Add Feed
        </button>
      </div>
    </>
  );
};

const Buttons = css`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;

  & > :not(:first-child) {
    margin-left: 0.5rem;
  }
`;

export default AddFeed;
