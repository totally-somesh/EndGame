import axios from "axios";
var baseurl = "http://localhost:3007";

class MoviesService {
  getAllMovies() {
    return axios.get(baseurl + "/movies");
  }

  getMovieById(id) {
    return axios.get(baseurl + "/movies/movie/" + id);
  }

  insertMovie(movie) {
    return axios.post(baseurl + "/movies/movie/" + movie.movieid, movie);
  }

  updateMovie(movie) {
    return axios.put(baseurl + "/movies/movie/" + movie.movieid, movie);
  }

  deleteMovie(movie) {
    return axios.delete(baseurl + "/movies/movie/" + movie.movieid, movie);
  }
}

export default new MoviesService();
