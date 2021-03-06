import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Heading from './Heading';
import IndexPage from './pages/IndexPage';
import HazardsPage from './pages/HazardsPage';
import RisksPage from './pages/RisksPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import OurStrategyPage from './pages/OurStrategyPage';
import TeamPage from './pages/TeamPage';
import Glossary from './pages/Glossary';
import FullPlanPage from './pages/FullPlanPage';
import HighlightsPage from './pages/HighlightsPage';
import SearchResults from './pages/SearchResults';
import ActionTracker from './action_tracker/ActionTracker';
import ActionDetail from './action_tracker/ActionDetail';
import Contact from './action_tracker/Contact';
import './sass/App.scss';
import './action_tracker/sass/ActionTracker.scss'

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
          <Route path="/risks" exact>
            <RisksPage />
          </Route>
          <Route path="/capabilities" exact>
            <CapabilitiesPage />
          </Route>
          <Route path="/our-strategy" exact>
            <OurStrategyPage />
          </Route>
          <Route path="/action-team" exact>
            <TeamPage />
          </Route>
          <Route path="/acronyms" exact>
            <Glossary />
          </Route>
          <Route path="/full-plan" exact>
            <FullPlanPage />
          </Route>
          <Route path="/highlight/:hazard" component={HighlightsPage} />
          <Route path="/search/:query" component={SearchResults} />
          <Route path="/action-tracker/contact">
            <Contact />
          </Route>
          <Route path="/action-tracker/detail/:id">
            <ActionDetail />
          </Route>
          <Route path="/action-tracker">
            <ActionTracker />
          </Route>
        </Switch>
      </HashRouter>
    </Container>
  );
}

export default App;
