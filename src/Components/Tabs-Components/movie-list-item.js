import React from "react";

function truncateText(text, limit){
  if (text.length > limit) {
    let truncatedText = text.substring(0,100);
    truncatedText = truncatedText.substr(0, Math.min(truncatedText.length, truncatedText.lastIndexOf(" ")));
    return `${truncatedText}...`;
  }
  else 
    return text;
}

function MovieListItem(props) {
  const {title, poster_path, overview, vote_average} = props.movie;
  const poster = poster_path? `http://image.tmdb.org/t/p/w185/${poster_path}`
                : process.env.PUBLIC_URL + '/default-movie-poster.jpeg'
  return(
    <div className="col-lg-4 col-md-6 col-sm-6 mb-4" style={{cursor: 'pointer'}} onClick={()=> props.onMovieSelect(props.movie)}>
      <div className="card h-100 shadow-sm">
        <img src={poster} className="card-img-top rounded" alt="..." style={{ height: '278px'}} />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{truncateText(overview,100)}</p>
          <p className="card-text">
            <small className="text-muted">{"Rating: " + vote_average}</small>
          </p>
        </div>
      </div>  
    </div>
  )
}

export default MovieListItem