import React from 'react';
import Navbar from './Navbar';
import { ActiveTagProvider } from '#/contexts/ActiveTagContext';
import Sidebar from './Sidebar';
import { css } from 'linaria';
import * as panes from './panes';

import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import mockTags from '#/mocks/tags';

interface Props extends RouteComponentProps {}

const Main: React.FC<Props> = (props) => {
  return (
    <ActiveTagProvider>
      <Navbar />
      <div className={contentClass}>
        <div className="is-hidden-mobile">
          <Sidebar tags={mockTags} />
        </div>
        <div className={paneWrapper}>
          <Switch>
            <Route path="/all-feeds" component={panes.FeedsManager} />
            <Route path="/" component={panes.PostsPane} />
          </Switch>
        </div>
      </div>
    </ActiveTagProvider>
  );
};

const contentClass = css`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const paneWrapper = css`
  width: 100%;
  max-width: 45rem;
`;

export default Main;
