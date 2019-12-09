import React, {Component} from "react";
import MovieListItem from "./movie-list-item";
import $ from 'jquery';
import MoviesDetail from "./movie-detail";

class MoviesList extends Component{
  constructor() {
    super();
    this.state = {
      selectedMovie: null
    }
  }

  showMovieDetails = (movie)=> {
    this.setState({
      selectedMovie: movie
    }, () => {
      $('#movie-detail-modal').modal()
    })
  }

  render(){
    return(
      <>
      <div className="row">
        {this.props.movies.map(movie => <MovieListItem movie={movie} key={movie.id} onMovieSelect={this.showMovieDetails}/>)}
      </div>
      { this.state.selectedMovie && <MoviesDetail movie={this.state.selectedMovie} /> }
      </>
    )
  }
}

export default MoviesList