import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 60px 0;
`;

export const Item = styled.li`
  position: relative;
  transition: transform 400ms linear;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const MovieTitle = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  max-width: 300px;
  color: #f2efee;
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const MoviePoster = styled.img`
  width: 250px;
`;

export const RateAvg = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #f2efee;
  border: 1px solid #f2efee;
  width: 50px;
  height: 50px;
`;

export const MovieRelease = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
  color: #f2efee;
`;
