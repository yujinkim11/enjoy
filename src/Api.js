import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "1c5ee19b4d67ab2d34835d17922369fa",
    language: "ko-kr",
  },
});

export const mvApi = {
  topRated: () => api.get("/movie/top_rated"),
  genre: () => api.get("/genre/movie/list"),
  upComing: () => api.get("/movie/upcoming"),
  movieVideo: (id) => api.get(`/movie/${id}/videos`),
  moviepopular: () => api.get("/movie/popular"),
  nowPlaying: () => api.get("/movie/now_playing"),
  movieDetail: (id) => api.get(`/movie/${id}`),
  search: (term) =>
    api.get(`/search/movie`, {
      params: {
        query: term,
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("/tv/top_rated"),
  popular: () => api.get("/tv/popular"),
  latest: () => api.get("/tv/on_the_air"),
  tvVideo: (id) => api.get(`/tv/${id}/videos`),
  tvDetail: (id) => api.get(`/tv/${id}`),
  tvEpisode: (id, season_number, episode_number) =>
    api.get(`/tv/${id}/season/${season_number}/episode/${episode_number}`),
};
