import React from "react";

function MovieListItem(props) {
  return(
    <div className="card mb-3" style={{maxWidth: 540}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={`http://image.tmdb.org/t/p/w185/${props.movie.poster_path}`} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.movie.title}</h5>
            <p className="card-text">{props.movie.overview}</p>
            <p className="card-text"><small className="text-muted">{"Rating: " + props.movie.vote_average}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieListItem