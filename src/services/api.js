import axios from 'axios';

// API for www.themoviedb.org

const API_READ_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDQ3MzYzMmQyN2JjY2IxYmI3ODg3ZmM1N2ExNTJiMSIsIm5iZiI6MTcyODA3MzgyNS40NzM2OTgsInN1YiI6IjY3MDA0ZDgyOTI1ZmRmOTI1YjdjZTRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eefDCge1DyP6mletLYnHvFRRWZyjo8eK-422oOZNgO0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${API_READ_ACCESS_TOKEN}`;

export const apiSearch = async query => {
  return axios
    .get('/search/movie', {
      params: {
        include_adult: false,
        language: 'en-US',
        page: 1,
        query: query,
      },
    })
    .then(res => res.data.results)
    .catch(err => console.error(err));
};

export const apiTrending = async () => {
  const res = await axios.get('/trending/movie/day', {
    params: {
      language: 'en-US',
    },
  });
  // console.log(res);
  return res.data;
};

export const apiMovieDetails = async id => {
  const res = await axios.get(`/movie/${id}`, {
    params: {
      language: 'en-US',
    },
  });
  // console.log(res);
  return res.data;
};

export const apiMovieReviews = async id => {
  const res = await axios.get(`/movie/${id}/reviews`, {
    params: {
      language: 'en-US',
    },
  });
  // console.log(res);
  return res.data;
};

export const apiMovieCast = async id => {
  const res = await axios.get(`/movie/${id}/credits`, {
    params: {
      language: 'en-US',
    },
  });
  // console.log(res);
  return res.data;
};
