import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Loader, Modal } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import MainMenu from 'main/webapp/components/MainMenu';
import RockPaperScissorsBoard from 'main/webapp/components/rock-paper-scissors/RockPaperScissorsBoard';
import { JOKES, ROCK_PAPER_SCISSORS } from 'main/webapp/Routes';
import JokesBoard from 'main/webapp/components/jokes/JokesBoard';
import { getIsLoading } from 'main/webapp/store/selectors/AppSelectors';

const App = () => {
  const isLoading = useSelector(getIsLoading);

  return (
    <Container>
      <Modal open={isLoading}>
        <Loader active />
      </Modal>
      <MainMenu />
      <Switch>
        <Route path={ROCK_PAPER_SCISSORS}>
          <RockPaperScissorsBoard />
        </Route>
        <Route path={JOKES}>
          <JokesBoard />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
