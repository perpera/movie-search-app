import styled from 'styled-components';

export const ScrollUpBtn = styled.button`
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 40px;
  right: 36px;
  border-radius: 50%;
  border: 3px solid #f2efee;
  background-color: #8a1d21;
  transition: transform 200ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
