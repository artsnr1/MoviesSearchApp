import React, {Component} from "react";
import { MovieDBService } from "../../services/movieDBService";
import GenreList from "./genre-list";
import {
    BrowserRouter as Router,
    Switch,
    Route,  
    Redirect
  } from "react-router-dom";
import MoviesList from "./movies-list";

class MovieGenreTabs extends Component {
  constructor() {
    super();
    this.state = {
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
      <Router>
        <div className="row py-4">
          <div className="col-sm-3">
            <GenreList selectedGenres={this.state.selectedGenres}/>
          </div>
          <div className="col-10 offset-1 offset-sm-0 col-sm-9">
            <Switch>
              <Route exact path='/genres/:genreId' render={(props) => {
                const MoviesByGenre = this.props.moviesData['results']
                  .filter(movie => movie.genre_ids
                  .includes(+props.match.params.genreId));

                if(MoviesByGenre.length === 0)
                  props.history.push(`/genres/${this.state.selectedGenres[0].id}`);
                else return <MoviesList movies={MoviesByGenre}/>
                }} />
              <Redirect from="/**" to={`/genres/${this.state.selectedGenres[0].id}`} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }

  render() {
    const { moviesData } = this.props;
    if(!this.state.genres || !moviesData)
      return null
    else {
      return (
        <section>
          {
            moviesData['results'].length === 0 ? 
            <h6>There are no search results</h6>:
            this.displayTabContent()
          }
        </section>
      )
    }
  }
}

export default MovieGenreTabs