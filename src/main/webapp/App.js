import React from 'react';

import { Container, StyledButton } from './App.style';

import 'semantic-ui-css/semantic.min.css';
import { FormattedMessage } from 'react-intl';

function App() {
  return (
    <Container className='App'>
      <StyledButton>
        <FormattedMessage id={'app.homepage.button'} />
      </StyledButton>
    </Container>
  );
}

export default App;
