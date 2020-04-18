import React, { createContext, useState, useContext } from 'react';
import { Tag } from '#/gql/codegen';

interface ActiveTagContext {
  activeTag: Tag | undefined;
  setActiveTag: (tag: Tag) => void;
}

const defaultValue = {
  activeTag: undefined,
  setActiveTag: () => { },
};

const ActiveTagContext = createContext<ActiveTagContext>(defaultValue);

export const ActiveTagProvider: React.FC = props => {
  const [activeTag, setActiveTag] = useState<Tag>();

  const value = {
    activeTag,
    setActiveTag,
  };

  return (
    <ActiveTagContext.Provider value={value}>
      {props.children}
    </ActiveTagContext.Provider>
  );
};

export const useActiveTag = () => useContext(ActiveTagContext);
