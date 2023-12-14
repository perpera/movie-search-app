import { getTrending } from 'movies-api';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { notification } from 'tools/notification';
import { ScrollUp } from 'tools/ScrollUp/ScrollUp';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    const fetchTrending = async () => {
      try {
        const response = await getTrending();
        setTrending(response);
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoader(false);
      }
    };
    fetchTrending();
  }, []);

  return (
    <>
      {loader && <Loader />}
      {trending.length > 0 && <MoviesList movies={trending} />}
      <ScrollUp />
    </>
  );
};

export default Home;
