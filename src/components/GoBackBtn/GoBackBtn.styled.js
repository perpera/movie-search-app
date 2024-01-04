import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  margin-top: 24px;
  display: flex;
  gap: 4px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  width: 100px;
  color: #f2efee;
  border: 2px solid #f2efee;
  border-radius: 22px;
  transition: color 200ms linear, border-color 200ms linear;
  &:hover,
  &:focus {
    color: #8bd538;
    border-color: #8bd538;
  }
`;
