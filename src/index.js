import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import store from 'main/webapp/store';
import App from 'main/webapp/App';
import messages from 'main/webapp/translations/en.json';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={'en'} messages={messages}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
