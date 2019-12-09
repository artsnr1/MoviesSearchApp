import React, {Component} from "react";

class MoviesDetail extends Component {

  showModalBody() {
    const {poster_path, overview, vote_average, vote_count, release_date, popularity} = this.props.movie;
    const poster = poster_path? `http://image.tmdb.org/t/p/w300/${poster_path}`
    : process.env.PUBLIC_URL + '/default-movie-poster.jpeg'
    return(
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={poster} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body text-left">
            {/* <h5 className="card-title">{title}</h5> */}
            <p className="card-text">{overview}</p>
            <p className="card-text"><strong>Release date: </strong>{release_date}</p>
            <p className="card-text"><strong>Popularity: </strong>{popularity}</p>
            <p className="card-text"><strong>Vote Average: </strong>{vote_average}</p>
            <p className="card-text"><strong>Vote Count: </strong>{vote_count}</p>
          </div>
        </div>
      </div>
    )
  }
  
  render() {
    const {title} = this.props.movie;
    return(
      <div className="modal fade" id="movie-detail-modal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myLargeModalLabel">{title}</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
                {this.showModalBody()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoviesDetail