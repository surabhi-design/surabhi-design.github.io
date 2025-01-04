import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = ({ activeTab }) => {
  const getBackgroundColor = () => {
    switch (activeTab) {
      case 'projects':
        return '#0d1116'; // Dark background for projects
      case 'about':
      case 'home':
      default:
        return '#EBF5F4'; // Light green background for home and about
    }
  };

  const getTextColor = () => {
    return activeTab === 'projects' ? '#f7ecd5' : '#030303'; // Adjust text color based on active tab
  };

  return (
    <HeaderWrapper style={{ backgroundColor: getBackgroundColor(), color: getTextColor() }}>
      <Logo to="/" style={{ color: getTextColor() }}>Surabhi Singh</Logo>
      <Nav>
        <NavItem to="/projects" active={activeTab === 'projects'} textColor={getTextColor()}>
          Work
        </NavItem>
        <NavItem to="/about" active={activeTab === 'about'} textColor={getTextColor()}>
          About
        </NavItem>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  border: none; /* Ensure no border */
  box-shadow: none; /* Ensure no shadow */

  @media (max-width: 768px) {
    padding: 10px 30px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    flex-direction: column;
  }
`;

const Logo = styled(Link)`
  font-family: 'alpinaitalic', serif;
  font-size: 24px;
  text-transform: lowercase;
  color: inherit;
  text-decoration: none;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const NavItem = styled(Link)`
  position: relative;
  padding-bottom: 5px;
  color: ${({ textColor }) => textColor};
  margin-left: 30px;
  font-size: 16px;
  text-decoration: none;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  border-bottom: ${({ active }) => (active ? '3px solid' : 'none')};
  border-bottom-color: ${({ active, to }) =>
    active && to === '/projects' ? '#5a6e27' : active && to === '/about' ? '#ce8ec0' : 'transparent'};

  &:hover {
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    font-size: 14px;
  }
`;
