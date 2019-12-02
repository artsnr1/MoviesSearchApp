import React from "react";

function SearchHistoryItem(props) {
  return(
    <li className="list-group-item">{props.searchItem}</li>
  )
}

export default SearchHistoryItem