import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import store from 'main/webapp/store';
import App from 'main/webapp/App';
import messages from 'main/webapp/translations/en.json';
import { BASE_NAME } from 'main/webapp/Routes';

ReactDOM.render(
  <BrowserRouter basename={BASE_NAME}>
    <Provider store={store}>
      <IntlProvider locale={'en'} messages={messages}>
        <App />
      </IntlProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
