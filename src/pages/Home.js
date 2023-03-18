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
		<p>Hello {this.state.title}</p>
        <button
          type="button"
          onClick={() => this.changeTitle()}
          class="btn btn-primary"
        >
          Subscibe
        </button>
	  </div>
	)
  }
}