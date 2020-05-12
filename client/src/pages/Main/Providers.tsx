import React from 'react';
import { ActiveTagProvider } from '#/contexts/ActiveTagContext';
import { AuthProvider } from '#/contexts/AuthContext';

// Just hardcode for now 🙃
const DOMAIN = 'chrss.auth0.com';
const CLIENT_ID = 'R2fLIuhGdNkTNHfzXy5n1P1N3JWY974o';
const REDIRECT_URI = 'http://localhost:7000';

const Providers: React.FC = (props) => {
  return (
    <AuthProvider
      domain={DOMAIN}
      client_id={CLIENT_ID}
      redirect_uri={REDIRECT_URI}
      cacheLocation="localstorage"
    >
      <ActiveTagProvider>{props.children}</ActiveTagProvider>
    </AuthProvider>
  );
};

export default Providers;
