import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 250px;
  background: linear-gradient(180deg, #2c3e50 0%, #34495e 100%);
  color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  padding: 24px;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  flex: 1;
  padding: 16px 0;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 14px 24px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 16px;
  font-weight: 500;
  border-left: 3px solid transparent;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
  }

  &.active {
    background-color: rgba(52, 152, 219, 0.2);
    color: white;
    border-left-color: #3498db;
  }

  svg {
    margin-right: 12px;
    width: 20px;
    height: 20px;
  }
`;

const Footer = styled.div`
  padding: 16px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>TheraFlow Lite</Logo>
      <Nav>
        <StyledNavLink to="/dashboard">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          Dashboard
        </StyledNavLink>
        <StyledNavLink to="/clients">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Clients
        </StyledNavLink>
      </Nav>
      <Footer>© 2025 TheraFlow Lite</Footer>
    </SidebarContainer>
  );
};

export default Sidebar;

