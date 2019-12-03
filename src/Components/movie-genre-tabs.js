import React, {Component} from "react";
import GenreListItem from "./genre-list-item";
import MoviesList from "./movies-list";
import { MovieDBService } from "../services/movieDBService";

class MovieGenreTabs extends Component {
  constructor() {
    super();
    this.selectedGenres = []
    this.state ={
      genres: []
    }
  }
  componentDidMount() {
    MovieDBService.fetchGenres()
    .then(data => this.setState({genres: data['genres']}));
  }

  displayGenreList() {
    const moviesGenresId = [].concat(...this.props.moviesData['results']
      .map(movie => movie.genre_ids));
    const uniqueMoviesGenresId = Array.from(new Set(moviesGenresId));
    this.selectedGenres = this.state.genres
      .filter((genre) => uniqueMoviesGenresId.includes(genre.id))
    return this.selectedGenres
      .map((genre, id) => <GenreListItem genre={genre} key={genre.id} id={id}/>)
  }

  displayMovieList() {
    return this.selectedGenres.map((genre, id) => {
      const MoviesByGenre = this.props.moviesData['results']
        .filter(movie => movie.genre_ids.includes(genre.id));
      console.log(MoviesByGenre.length)
      return <MoviesList movies={MoviesByGenre} genre={genre} key={genre.id} id={id}/>
    })
  }

  displayTabContent() {
    return(
      <section>
        <h4 className="text-primary">Search Results</h4>
        <div className="row py-4">
          <div className="col-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              {this.displayGenreList()}
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              {this.displayMovieList()}
            </div>
          </div>
        </div>
      </section>
    )
  }

  render() {
    const { moviesData } = this.props;
    console.log('uff',this.state.genres.length, moviesData)
    if(this.state.genres.length === 0 || !moviesData)
      return null
    else if(moviesData['results'].length === 0)
      return "There are no search results"
    else
      return this.displayTabContent()
  }
}

export default MovieGenreTabs