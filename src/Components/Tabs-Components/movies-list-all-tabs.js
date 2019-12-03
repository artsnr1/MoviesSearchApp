import React, {Component} from "react";
import MoviesListPerTab from "./movies-list-per-tab";

class MoviesListAllTabs extends Component {
  
  displayMovieList() {
    return this.props.selectedGenres.map((genre, id) => {
      const MoviesByGenre = this.props.movies
        .filter(movie => movie.genre_ids.includes(genre.id));
      return <MoviesListPerTab movies={MoviesByGenre} genre={genre} key={genre.id} id={id}/>
    })
  }

  render() {
    return(
      <div className="col-9">
        <div className="tab-content" id="v-pills-tabContent">
          {this.displayMovieList()}
        </div>
      </div>
    )
  }
}

export default MoviesListAllTabs