import styled from 'styled-components';

export const CastWrapper = styled.div`
  padding: 44px 0;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc(100% - 60px / 3);
  }

  @media screen and (min-width: 1440px) {
    width: calc(100% - 90px / 4);
  }
`;

export const CastImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: url(${props => props.$actor}) no-repeat 0px -25px / cover;
  background-color: #8bd538;

  @media screen and (min-width: 1440px) {
    width: 300px;
    height: 300px;
  }
`;

export const CastName = styled.p`
  color: #f2efee;
  font-size: 20px;
  font-weight: 600;
`;

export const CastCharacter = styled.p`
  color: #f2efee;
  text-align: center;
  font-style: italic;
`;

export const NoCast = styled.div`
  color: #f2efee;
  font-size: 20px;
`;
