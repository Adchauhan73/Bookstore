import React, { Component } from 'react'
// import Title from '../components/Title'

export default class Home extends Component {
	constructor(){
		super();
		this.state={
			title:"Title",
			description:"Nothing",	
			}
	}
	changeTitle() {
		this.setState({
		  title: "This was changed title",
		});
	  }
	
  render() {
	return (
	  <div>
		
		<h1>Hello {this.state.title}</h1>
        <button
          type="button"
          onClick={() => this.changeTitle()}
          className="btn btn-primary"
        >
          Subscribe
        </button>
	  </div>
	)
  }
}