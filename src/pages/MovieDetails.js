import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieById } from 'movies-api';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import {
  Container,
  LinkWrapper,
  MovieInfoLink,
} from 'components/SharedLayout/SharedLayout.styled';
import { ScrollUp } from 'tools/ScrollUp/ScrollUp';
import { Loader } from 'components/Loader/Loader';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { notification } from 'tools/notification';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setLoader(true);

    const fetchMovieById = async () => {
      try {
        const movie = await getMovieById(movieId);

        setMovieInfo(movie);
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoader(false);
      }
    };
    fetchMovieById();
  }, [movieId]);

  const goBackPath = location?.state?.from ?? '/';

  return (
    <Container>
      {loader && <Loader />}
      <GoBackBtn path={goBackPath} />
      {movieInfo && <MovieInfo movie={movieInfo} />}
      <LinkWrapper>
        <MovieInfoLink to="cast">Cast</MovieInfoLink>
        <MovieInfoLink to="reviews">Reviews</MovieInfoLink>
      </LinkWrapper>
      <ScrollUp />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
