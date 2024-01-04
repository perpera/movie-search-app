import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 428px) {
    max-width: 394px;
  }

  @media screen and (min-width: 768px) {
    max-width: 734px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1406px;
  }
`;

export const Header = styled.header`
  width: 100vw;
  height: 60px;
  background-color: #30312f;
  opacity: 0.8;
  border-bottom: 4px solid #8a1d21;
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

export const LinkWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding-bottom: 44px;
`;

export const MovieInfoLink = styled(NavLink)`
  color: #f2efee;
  border: 2px solid #f2efee;
  border-radius: 22px;
  font-size: 22px;
  padding: 8px;
  transition: color 200ms linear, border-color 200ms linear;
  &:active,
  &:hover,
  &:focus {
    color: #8bd538;
    border-color: #8bd538;
  }
`;
