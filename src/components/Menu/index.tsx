import React from 'react';

import { Container } from './styles';
import Home from '../../assets/images/home.svg';
import Notification from '../../assets/images/notification.svg';
import Message from '../../assets/images/message.svg';

const Menu: React.FC = () => (
  <Container>
    <li data-testid="home">
      <img src={Home} alt="home" />
      Home
    </li>
    <li data-testid="notifications">
      <img src={Notification} alt="notification" />
      Notifications
    </li>
    <li data-testid="messages">
      <img src={Message} alt="message" />
      Messages
    </li>
  </Container>
);

export default Menu;
