import { css } from 'linaria';
import React, { useEffect } from 'react';
import { useUser } from '#/contexts/UserContext';

interface Props {}

const LoginButton: React.FC<Props> = () => {
  const { user, login, logout } = useUser();

  return (
    <div className="button is-primary" onClick={login}>
      Log In
    </div>
  );
};

export default LoginButton;
