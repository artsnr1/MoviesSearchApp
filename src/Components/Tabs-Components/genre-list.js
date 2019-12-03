import React from "react";
import GenreListItem from "./genre-list-item";

function GenreList(props) {
  return(
    <div className="col-3">
    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    { 
			props.selectedGenres
      .map((genre, id) => <GenreListItem genre={genre} key={genre.id} id={id}/>)
    }
    </div>
  </div>
  )
}

export default GenreList