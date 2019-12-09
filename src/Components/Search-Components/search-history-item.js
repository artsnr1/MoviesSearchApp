import React from "react";

function SearchHistoryItem(props) {
  return(
    <li className="list-group-item animated slideInDown" >{props.searchItem}</li>
  )
}

export default SearchHistoryItem