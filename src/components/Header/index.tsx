import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  page?: 'import' | 'dashboard';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  page = 'dashboard',
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <>
          <Link to="/">Listagem</Link>
          <Link to="/import">Importar</Link>
        </>
      </nav>
    </header>
  </Container>
);

export default Header;
