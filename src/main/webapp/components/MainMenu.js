import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Icon, Menu } from 'semantic-ui-react';

import { JOKES, ROCK_PAPER_SCISSORS } from 'main/webapp/Routes';

const MainMenu = () => (
  <Menu direction='top' inverted>
    <Menu.Item>
      <Link to={ROCK_PAPER_SCISSORS}>
        <Icon name='gamepad' />
        <FormattedMessage id={'app.menu.label.rockPaperScissors'} />
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={JOKES}>
        <Icon name='talk' />
        <FormattedMessage id={'app.menu.label.jokes'} />
      </Link>
    </Menu.Item>
  </Menu>
);

export default MainMenu;
