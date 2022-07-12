import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "a0c00eb5e3cae224bdc5208275b7c9b8",
    language: "ko-kr",
  },
});

export const movieApi = {
  movieNow: () => api.get("movie/now_playing"),
  moviePopular: () => api.get("movie/popular"),
  movieTopRated: () => api.get("movie/top_rated"),
  movieUpComing: () => api.get("movie/upcoming"),
  movieLatest: () => api.get("movie/latest"),
};

export const tvApi = {
  tvNow: () => api.get("tv/now_playing"),
  tvPopular: () => api.get("tv/popular"),
  tvTopRated: () => api.get("tv/top_rated"),
  tvUpComing: () => api.get("tv/upcoming"),
  tvLatest: () => api.get("tv/latest"),
};
