import React from 'react';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import { MainMenu } from 'main/webapp/components/SideMenu';
import { RockPaperScissors } from 'main/webapp/components/RockPaperScissors';

const App = () => (
  <Container>
    <MainMenu />
    <RockPaperScissors />
  </Container>
);

export default App;
