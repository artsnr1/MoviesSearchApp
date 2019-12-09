import React,{Component} from "react";
import { NavLink} from "react-router-dom"

function GenreListItem(props) {
  return(
    <NavLink exact 
      to={`/genres/${props.genre.id}`} 
      className="nav-link primary-color" 
      activeClassName="primary-bg-color text-white" >
      {props.genre.name}
    </NavLink>
  )
}

export default GenreListItem