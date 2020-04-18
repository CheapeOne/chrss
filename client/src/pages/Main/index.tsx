import { css } from 'linaria';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { ActiveTagProvider } from '#/contexts/ActiveTagContext';
import Navbar from './Navbar';
import * as panes from './panes';
import Sidebar from './Sidebar';

type Props = RouteComponentProps;

const Main: React.FC<Props> = () => {
  return (
    <ActiveTagProvider>
      <Navbar />
      <div className={Content}>
        <div className="is-hidden-mobile">
          <Sidebar />
        </div>
        <div className={Pane}>
          <Switch>
            <Route path="/tags/:name/:id" component={panes.PostsPane} />
            <Route path="/feeds/manage" component={panes.FeedsManager} />
            <Route path="/feeds/:feed" component={panes.PostsPane} />
            <Route path="/" component={panes.PostsPane} />
          </Switch>
        </div>
      </div>
    </ActiveTagProvider>
  );
};

const Content = css`
  display: grid;
  grid-template-columns: 150px 1fr;
  margin: 2rem auto;
  max-width: 1200px;
  column-gap: 5rem;
  padding: 0 1rem;
`;

const Pane = css`
  width: 100%;
  max-width: 45rem;
`;

export default Main;
