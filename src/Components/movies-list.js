import React from "react";
import MovieListItem from "./movie-list-item";

function MoviesList(props) {
  console.log('iiiiibbb'. props)
  return(
    <div className={"tab-pane fade show " + (props.id === 0 && "active")} id={`v-pills-${props.genre.id}`} role="tabpanel" aria-labelledby={`v-pills-${props.genre.id}-tab`}>
      {console.log('fgfgfdg',props.movies)}
        {props.movies.map(movie => <MovieListItem movie={movie} key={movie.id}/>)}
    </div>
  )
}

export default MoviesList