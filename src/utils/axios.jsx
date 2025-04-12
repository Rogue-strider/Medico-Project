import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjQ3YWI5MzNhZDg5NGQzMTEyZDdkM2IzYTUzNWQ1MiIsIm5iZiI6MTczODY2NDA0NC44MjIsInN1YiI6IjY3YTFlODZjNmI5ZjY2NmE5OTAzMDA4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ly29iiY6EShS1VP6zQLvB7Nk6SB66O9ieCWgAQZkyeI",
  },
});

export default instance;