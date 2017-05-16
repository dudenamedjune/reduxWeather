import React, { Component } from 'react';

export default class SerchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event){
    this.setState({term: event.target.value})

  }
  render(){
    return(
      <form className="input-group">
        <input  placeholder="Get a five-day forecast in your favorite citites"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit </button>
        </span>
      </form>
    )
  }
}
