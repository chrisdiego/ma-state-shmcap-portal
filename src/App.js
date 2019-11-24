import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Heading from './Heading';
import IndexPage from './pages/IndexPage';
import HazardsPage from './pages/HazardsPage';
import './sass/App.scss';

const App = () => {
  return (
    <Container fluid className="p-0">
      <HashRouter>
      <Heading/>
        <Switch>
          <Route path="/" exact>
            <IndexPage />
          </Route>
          <Route path="/hazards" exact>
            <HazardsPage />
          </Route>
        </Switch>

      </HashRouter>
    </Container>
  );
}

export default App;
