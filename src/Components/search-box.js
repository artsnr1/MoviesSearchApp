import React, {Component} from "react";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      keywords: [],
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
          keywords: keywords,
          errorMsg: ""
        });
      }

      if(this.typingTimeout) {
        clearTimeout(this.typingTimeout);
      }
      this.typingTimeout = setTimeout(
        () => {
          if( searchedText.trim() !== '') {
          // ToDo: API CALL
          this.props.populateSearchHistory(this.state.keywords.join(" "));
          }
        }, 1000
      );
  }
  render() {
    return(
      <form className="row justify-content-center">
        <div className="col-md-8">
          <input type="text" className="form-control" onChange={this.handleChange} placeholder="Type keywords to search for tweets ..."/>
          <span className="text-danger">{this.state.errorMsg}</span>
        </div>
      </form>
    )
  }
}

export default SearchBox