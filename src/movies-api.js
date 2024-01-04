import axios from 'axios';

const KEY = '4441e8220eedb15302cf9a6e811d294b';
axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = { api_key: KEY };

export const getTrending = async () => {
  const { data } = await axios.get('/3/trending/movie/week');
  return data.results;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`/3/movie/${id}`);
  return data;
};

export const getMoviesBySearch = async (query, page) => {
  const { data } = await axios.get(
    `/3/search/movie?query=${query}&page=${page}`
  );
  return data;
};

export const getCast = async id => {
  const { data } = await axios.get(`/3/movie/${id}/credits`);
  return data;
};

export const getReviews = async id => {
  const { data } = await axios.get(`3/movie/${id}/reviews`);
  return data;
};
