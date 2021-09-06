import React from 'react';
import { Container, DivContent, DivAvatar, ButtonTweet } from './styles';
import Menu from '../Menu';
import Logo from '../../assets/images/logo.svg';
import Avatar from '../../assets/images/avatar.png';

const Header: React.FC = () => (
  <Container>
    <DivContent>
      <nav>
        <Menu />
      </nav>
      <img src={Logo} alt="logo" />
      <DivAvatar id="rightSide">
        <input data-testid="search" type="text" placeholder="Search on Blog" />
        <img data-testid="avatar" src={Avatar} alt="avatar" />
        <ButtonTweet data-testid="tweet">Tweet</ButtonTweet>
      </DivAvatar>
    </DivContent>
  </Container>
);

export default Header;
