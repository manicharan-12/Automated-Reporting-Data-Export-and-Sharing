import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #007bff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #fff;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: #f8f9fa;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Report Manager</Logo>
      <NavLinks>
        <NavLink to="/">Schedules</NavLink>
        <NavLink to="/exports">Exports</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
