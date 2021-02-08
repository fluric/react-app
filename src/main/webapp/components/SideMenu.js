import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Icon, Menu } from 'semantic-ui-react';

export const MainMenu = () => (
  <Menu direction='top' inverted>
    <Menu.Item>
      <Icon name='gamepad' />
      <FormattedMessage id={'app.menu.label.rockPaperScissors'} />
    </Menu.Item>
  </Menu>
);
