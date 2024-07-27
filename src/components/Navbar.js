import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 1px 0px 0px rgb(229, 229, 229);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;

  @media (min-width: 960px) {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
`;

const Title = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  color: rgb(255, 255, 255);
  background-color: rgb(37, 99, 235);

  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(59, 130, 246);
  }

  @media (min-width: 960px) {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }
`

const Navbar = () => {
  return(
    <Header>
      <HeaderContent className="wrap">
        <Title>Jova</Title>
        <Nav>
          <NavLink to="/" className="btn">Home</NavLink>
        </Nav>
      </HeaderContent>
    </Header>
  );
}

export default Navbar;
