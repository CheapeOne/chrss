import React from 'react';
import { ActiveTagProvider } from '#/contexts/ActiveTagContext';
import { UserProvider } from '#/contexts/UserContext';

interface Props {}

const Providers: React.FC<Props> = (props) => {
  return (
    <UserProvider>
      <ActiveTagProvider>{props.children}</ActiveTagProvider>
    </UserProvider>
  );
};

export default Providers;
