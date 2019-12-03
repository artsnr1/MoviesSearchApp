import React from "react";

function GenreListItem(props) {
  return(
    <a className={"nav-link " + (props.id === 0 && "active")} id={`v-pills-${props.genre.id}-tabs`} data-toggle="pill" href={`#v-pills-${props.genre.id}`} role="tab" aria-controls={`v-pills-${props.genre.id}`} aria-selected="true">{props.genre.name}</a>
  )
}

export default GenreListItem