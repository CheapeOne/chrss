import { css } from 'linaria';
import React from 'react';

interface Props {}

const AddFeed: React.FC<Props> = (props) => {
  return (
    <>
      <h3>Add Feed</h3>
      <input
        className="input is-rounded"
        type="text"
        placeholder="Rounded input"
      ></input>
    </>
  );
};

export default AddFeed;
