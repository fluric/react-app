import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import { MainMenu } from 'main/webapp/components/MainMenu';
import { RockPaperScissorsBoard } from 'main/webapp/components/rock-paper-scissors/RockPaperScissorsBoard';
import { JOKES, ROCK_PAPER_SCISSORS } from 'main/webapp/Routes';

const App = () => (
  <Container>
    <MainMenu />
    <Switch>
      <Route path={ROCK_PAPER_SCISSORS}>
        <RockPaperScissorsBoard />
      </Route>
      <Route path={JOKES}>Joke</Route>
    </Switch>
  </Container>
);

export default App;
