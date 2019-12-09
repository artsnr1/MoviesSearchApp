import React, {Component} from "react";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      keywords: sessionStorage.getItem("searchedTexts")? JSON.parse(sessionStorage.getItem("searchedTexts")).slice(-1)[0] : '',
      errorMsg: ""
    };
    this.typingTimeout = null;
  }

  handleChange = (event) => {
    const searchedText = event.target.value;
      const keywords = searchedText.split(' ').filter(word=>word.length>0);
      // const keywords = searchedText.replace(/\s+/g, " ")
      if(keywords.length > 5) {
        return this.setState({errorMsg: "You can search maximum 5 words at a time"});
      } else {  
        this.setState({
          keywords: searchedText,
          errorMsg: ""
        });
      }

      if(this.typingTimeout) {
        clearTimeout(this.typingTimeout);
      }
      this.typingTimeout = setTimeout(
        () => {
          if( searchedText.trim() !== '') {
          this.props.fetchMovies(keywords.join(" "))
          }
        }, 1000
      );
  }
  render() {
    return(
      <div className="row justify-content-center py-4">
        <div className="col-md-6">
          <input type="text" value={this.state.keywords} className="form-control" onChange={this.handleChange} placeholder="Type keywords to search for movies ..."/>
          <span className="text-danger">{this.state.errorMsg}</span>
        </div>
      </div>
    )
  }
}

export default SearchBox