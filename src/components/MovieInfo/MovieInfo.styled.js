import styled from 'styled-components';

export const InfoLine = styled.hr`
  width: 100%;
  border-color: #f2efee;
`;

export const InfoContainer = styled.div`
  padding: 60px 0;
`;

export const InfoSection = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(4, 4, 4, 0.4), rgba(4, 4, 4, 0.4))
      no-repeat center/cover;
    filter: blur(16px);
    z-index: -1;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 44px;
  }
`;

export const InfoPoster = styled.img`
  width: 100%;
  border-radius: 22px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const InfoTitle = styled.h2`
  font-size: 26px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const MovieDescr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 8px;
  background-color: #dbdddb;
  backdrop-filter: blur(16px);
  border-radius: 22px;
min-height: 315px;
`;

export const InfoScore = styled.span`
width: 40px;
height: 40px;
border-radius:50%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.color};
`;

export const ScoreText = styled.p`
display: flex;
gap: 4px;
align-items: center;
`;

export const InfoSubTitle = styled.h3`
font-size: 20px;
font-style: italic;
`;

export const GenresList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 4px;
`;
