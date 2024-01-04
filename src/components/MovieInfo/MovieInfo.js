import {
  Info,
  InfoContainer,
  InfoLine,
  InfoPoster,
  InfoScore,
  InfoSection,
  InfoSubTitle,
  InfoTitle,
  MovieDescr,
  ScoreText,
  GenresList,
} from './MovieInfo.styled';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import getPercentage from 'tools/getPercentage';
import { getReviewColor } from 'tools/getReviewColor';
import defPoster from '../../img/def_poster.png';

const MovieInfo = ({
  backdrop_path,
  original_title,
  poster_path,
  rate_avg,
  overview,
  genres,
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const posterSource = poster_path ? posterUrl : defPoster;
  const backdropUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  const backdropSource = backdrop_path ? backdropUrl : defPoster;

  return (
    <Container>
      <InfoContainer>
        <InfoSection $backdropSource={backdropSource}>
          <Info>
            <InfoPoster src={posterSource} alt={original_title} />
            <MovieDescr>
              <InfoTitle>{original_title}</InfoTitle>
              <InfoLine />
              <ScoreText>
                User score:{' '}
                <InfoScore color={getReviewColor(getPercentage(rate_avg))}>
                  {getPercentage(rate_avg)}%
                </InfoScore>
              </ScoreText>
              <InfoSubTitle>Overview</InfoSubTitle>
              <p>{overview}</p>
              {genres.length > 0 && (
                <>
                  <InfoSubTitle>Genres</InfoSubTitle>
                  <GenresList>
                    {genres.map(genre => (
                      <p key={genre.id}>{genre.name}</p>
                    ))}
                  </GenresList>
                </>
              )}
            </MovieDescr>
          </Info>
        </InfoSection>
      </InfoContainer>
    </Container>
  );
};

export default MovieInfo;
