import React, {Component} from "react";
import { MovieDBService } from "../../services/movieDBService";
import GenreList from "./genre-list";
import MoviesListAllTabs from "./movies-list-all-tabs";

class MovieGenreTabs extends Component {
  constructor() {
    super();
    this.state ={
      genres: null,
      selectedGenres: null
    }
  }
  componentDidMount() {
    MovieDBService.fetchGenres()
    .then(data => this.setState({genres: data['genres']}));
  }

  static getDerivedStateFromProps(props, state) {
    if(props.moviesData && state.genres) {
      const moviesGenresId = [].concat(...props.moviesData['results']
      .map(movie => movie.genre_ids));
      const uniqueMoviesGenresId = Array.from(new Set(moviesGenresId));
      return ({
        selectedGenres: state.genres
        .filter((genre) => uniqueMoviesGenresId.includes(genre.id))
      })
    }
    else 
      return null;
  }

  displayTabContent() {
    return(
      <div className="row py-4">
        <GenreList selectedGenres={this.state.selectedGenres}/>
        <MoviesListAllTabs selectedGenres={this.state.selectedGenres} movies={this.props.moviesData['results']}/>
      </div>
    )
  }

  render() {
    const { moviesData } = this.props;
    if(!this.state.genres || !moviesData)
      return null
    else {
      return (
      <section>
        <h4 className="text-primary">Search Results</h4>
        {
          moviesData['results'].length === 0 ? 
          "There are no search results":
           this.displayTabContent()
        }
      </section>
      )
    }
  }
}

export default MovieGenreTabs