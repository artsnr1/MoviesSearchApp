import React from "react";
import GenreListItem from "./genre-list-item";

function GenreList(props) {
  return(
    <div className="nav flex-column nav-pills">
    { 
			props.selectedGenres
      .map((genre, id) => <GenreListItem genre={genre} key={genre.id}/>)
    }
    </div>
  )
}

export default GenreList