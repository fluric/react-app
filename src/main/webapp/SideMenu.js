import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

function SideMenu() {
  return (
    <Sidebar as={Menu} animation='overlay' direction='top' inverted visible width='thin'>
      <Menu.Item>
        <Icon name='gamepad' />
        <FormattedMessage id={'app.menu.label.rockPaperScissors'} />
      </Menu.Item>
    </Sidebar>
  );
}

export default SideMenu;
