import React from "react";
import SearchHistoryItem from "./search-history-item";

function SearchHistoryList(props) {
  return(
    <aside>
      <h4 className="text-primary">History</h4>
      <ul className="list-group p-4">
        { props.searchedWords.length > 0 ? 
          props.searchedWords.slice(0).reverse().map((data,i) => <SearchHistoryItem searchItem={data} key={i}/>)
          : "There is no search history" 
        }
      </ul>
    </aside>
  )
}

export default SearchHistoryList