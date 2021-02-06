import React, { useState } from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

function SideMenu() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      onHide={() => setIsVisible(false)}
      vertical
      visible={isVisible}
      width='thin'
    >
      <Menu.Item>
        <Icon name='home' />
        Home
      </Menu.Item>
    </Sidebar>
  );
}

export default SideMenu;
