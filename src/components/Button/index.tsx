import React from 'react';
import { Container } from './styles';

interface IButtonProps {
  disabled: boolean;
  onClick(): void;
}
const Button: React.FC<IButtonProps> = ({ disabled, onClick, children }) => (
  <Container data-testid="button" aria-label="button" disabled={disabled} onClick={onClick}>
    {children}
  </Container>
);

export default Button;
