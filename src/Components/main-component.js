import React, {Component} from "react";
import SearchBox from "./Search-Components/search-box";
import SearchHistoryList from "./Search-Components/search-history-list";
import MovieGenreTabs from "./Tabs-Components/movie-genre-tabs";
import { MovieDBService } from "../services/movieDBService";

class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      searchedTexts: sessionStorage.getItem("searchedTexts") === null ? [] : JSON.parse(sessionStorage.getItem("searchedTexts")),
      moviesData: sessionStorage.getItem("movies") && JSON.parse(sessionStorage.getItem("movies"))
    };
  }

  setSearchedTexts = (text) => {
    this.setState(prevState => ({
      searchedTexts: [...prevState.searchedTexts, text].slice(-10)
    }));
    sessionStorage.setItem("searchedTexts", JSON.stringify(this.state.searchedTexts));
  }

  getMovies = (keywords) => {
    MovieDBService.fetchMovies(keywords)
    .then((data) => {
      this.setState( {
        moviesData: data
      });
      sessionStorage.setItem("movies", JSON.stringify(this.state.moviesData));
      this.setSearchedTexts(keywords)
    })
  }
  render() {
    return(
      <div className="container-fluid">
        <SearchBox fetchMovies={this.getMovies} />
        <div className="row">
          <section className="col-md-9 my-4"> 
            <MovieGenreTabs moviesData={this.state.moviesData} />
          </section>
          <aside className="col-md-3 my-4">
            <SearchHistoryList searchedWords={this.state.searchedTexts} />
          </aside>
        </div>
      </div>
    )
  }
}

export default MainComponent