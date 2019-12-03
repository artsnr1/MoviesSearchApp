import { environment } from "../environments/environment"

export class MovieDBService {
  static fetchMovies = (keywords) =>{
    const searchAPI = 'https://api.themoviedb.org/3/search/movie';
    return fetch(`${searchAPI}?api_key=${environment.movieDB.key}&query=${encodeURIComponent(keywords)}`)
    .then(data => data.json())
  }

  static fetchGenres = () => {
    const genreAPI = 'https://api.themoviedb.org/3/genre/movie/list';
    return fetch(`${genreAPI}?api_key=${environment.movieDB.key}`)
    .then(data => data.json())
  }
}