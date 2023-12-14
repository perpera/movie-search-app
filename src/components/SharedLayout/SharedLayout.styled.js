import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  width: 100vw;
  height: 60px;
  background-color: #30312f;
  opacity: 0.8;
  border-bottom: 1px solid #8a1d21;
  backdrop-filter: blur(8px);
`;

export const Nav = styled.nav`
  display: flex;
  height: 60px;
  gap: 42px;
  justify-content: baseline;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 4px;
  font-size: 20px;
  color: #f2efee;
  align-items: center;
  transition: color 400ms linear;
  &.active {
    background-color: #00908f;
    padding: 12px;
    border-radius: 16px;
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: #00908f;
  }
`;
