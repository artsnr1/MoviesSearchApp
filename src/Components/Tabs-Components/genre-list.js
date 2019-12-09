import React from "react";
import GenreListItem from "./genre-list-item";

function GenreList(props) {
  return(
    <nav className="mb-4">
      <button className="navbar-toggler d-block d-sm-none mx-auto mb-3 primary-color h4" 
        type="button" 
        data-toggle="collapse" 
        data-target="#genrePills" 
        aria-controls="genrePills" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        Select Genre
        <i class="fas fa-caret-down pl-2"></i>
      </button>
      <div className="d-sm-block collapse navbar-collapse" id="genrePills">
      { 
        props.selectedGenres
        .map((genre, id) => <GenreListItem genre={genre} key={genre.id}/>)
      }
      </div>
    </nav>
  )
}

export default GenreList