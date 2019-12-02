import React, {Component} from "react";
import SearchBox from "./search-box";
import SearchHistoryList from "./search-history-list";

class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      searchedTexts: []
    };
  }

  setSearchedTexts = (text) => {
    this.setState(prevState => ({
      searchedTexts: [...prevState.searchedTexts, text].slice(-10)
    }));
  }
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <section className="col-md-8 my-4"> 
            <SearchBox populateSearchHistory={this.setSearchedTexts}/>
          </section>
          <aside className="col-md-4 my-4">
            <SearchHistoryList searchedWords={this.state.searchedTexts}/>
          </aside>
        </div>
      </div>
    )
  }
}

export default MainComponent