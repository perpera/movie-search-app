import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NotFoundText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4px;
  color: #f2efee;
  font-size: 22px;
`;

export const GoToMainPage = styled(Link)`
  padding: 8px;
  color: #f2efee;
  border: 1px solid #f2efee;
  border-radius: 22px;
  font-weight: 600;
  transition: color 200ms linear, border-color 200ms linear;
  &:hover,
  &:focus {
    color: #8bd538;
    border-color: #8bd538;
  }
`;
