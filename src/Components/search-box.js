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
    const keywords = event.target.value.split(' ');
    if(keywords.length > 5) {
      return this.setState({errorMsg: "Can search maximum 5 words at a time"});
    } else {  
      this.setState({
        keywords: keywords,
        errorMsg: ""
      });
    }

    if(this.typingTimeout){
      clearTimeout(this.typingTimeout);
    }
    this.typingTimeout = setTimeout(
      () => {
        console.log('sss',this.state.keywords);
        // API CALL
      }, 1000
    );
  }
  render() {
    return(
      <form className="row justify-content-center">
        <div className="col-md-5 my-3">
          <input type="text" className="form-control" onChange={this.handleChange} placeholder="Type keywords to search for tweets ..."/>
          <span className="text-danger">{this.state.errorMsg}</span>
        </div>
      </form>
    )
  }
}

export default SearchBox