import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

export const moviesApi = {
  nowPlaying: () =>
    api.get("/movie/now_playing", {
      params: { api_key: "e6e0dd53c79220875187320b4265f3d6", language: "en-US" }
    })
};
