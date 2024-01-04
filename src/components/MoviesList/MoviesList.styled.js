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
  transition: transform 200ms linear;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: calc((100%) - 80px) / 3;
  }

  @media screen and (min-width: 1440px) {
    width: calc((100%) - 200px) / 6;
  }
`;

export const MovieTitle = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  max-width: 300px;
  color: #f2efee;

  @media screen and (min-width: 428px) {
    max-width: 398px;
  }

  @media screen and (min-width: 768px) {
    max-width: 200px;
    font-size: 21px;
  }
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

  @media screen and (min-width: 768px) {
  }
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
