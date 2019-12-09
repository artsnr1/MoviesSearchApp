import React,{Component} from "react";
import { NavLink} from "react-router-dom"

function GenreListItem(props) {
  return(
    <NavLink exact 
      to={`/genres/${props.genre.id}`} 
      className="nav-link" 
      activeClassName="active" >
      {props.genre.name}
    </NavLink>
  )
}

export default GenreListItem