import React from 'react';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import { MainMenu } from 'main/webapp/components/SideMenu';
import { RockPaperScissorsBoard } from 'main/webapp/components/RockPaperScissorsBoard';

const App = () => (
  <Container>
    <MainMenu />
    <RockPaperScissorsBoard />
  </Container>
);

export default App;
