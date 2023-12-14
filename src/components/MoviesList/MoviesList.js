import { Container } from 'components/SharedLayout/SharedLayout.styled';
import {
  List,
  Item,
  MovieLink,
  MoviePoster,
  MovieRelease,
  MovieTitle,
  RateAvg,
} from './MoviesList.styled';
import { getPercentage } from 'tools/getPercentage';
import { getReviewColor } from 'tools/getReviewColor';
import { CiCalendar } from 'react-icons/ci';

export const MoviesList = ({ movies, location }) => {
  return (
    <Container>
      <List>
        {movies.map(({ id, original_title, rate_avg, release_date }) => (
          <Item key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <MoviePoster />
              <RateAvg
                style={{
                  backgroundColor: getReviewColor(getPercentage(rate_avg)),
                }}
              >
                {getPercentage(rate_avg)}
              </RateAvg>
              <MovieTitle>{original_title}</MovieTitle>
              {release_date && (
                <MovieRelease>
                  <CiCalendar /> {release_date}
                </MovieRelease>
              )}
            </MovieLink>
          </Item>
        ))}
      </List>
    </Container>
  );
};
