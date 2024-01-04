import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'movies-api';
import MoviesSearch from 'components/MoviesSearch/MoviesSearch';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { ScrollUp } from 'tools/ScrollUp/ScrollUp';
import { notification } from 'tools/notification';
import { smoothScroll } from 'tools/SmoothScroll';
import { MoviesPagination } from 'components/Pagination/Pagination';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [pg, setPg] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  const handleSearch = value => {
    setPg(1);
    setSearchParams({ query: value, page: pg });
  };

  useEffect(() => {
    const queryForSearch = searchParams.get('query') || '';
    if (!queryForSearch) return;
    setLoader(true);

    const fetchMoviesBySearch = async () => {
      try {
        const { page, results, total_pages } = await getMoviesBySearch(
          queryForSearch,
          pg
        );

        setMovies(results);
        setPg(page);
        setPageQty(total_pages);
        setSearchParams({ query: queryForSearch, page: pg });

        if (!results.length) {
          setSearchParams({});
          return notification(
            `Sorry, no movies found on query ${queryForSearch}`
          );
        }

        return results;
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoader(false);

        smoothScroll('movieList');
      }
    };
    fetchMoviesBySearch();
  }, [searchParams, pg, setSearchParams]);

  return (
    <>
      {loader && <Loader />}
      <MoviesSearch search={handleSearch} />

      {pageQty > 1 && (
        <MoviesPagination pageQty={pageQty} pg={pg} onChange={setPg} />
      )}

      {movies.length > 0 && <MoviesList movies={movies} location={location} />}

      <ScrollUp />
    </>
  );
};

export default Movies;
