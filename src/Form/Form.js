import React from 'react'
import { Component } from 'react'
import '../Form/Form.scss'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form className="form">
        <h1>Congrats on leaving the dark side and becoming a dog person!!!!!</h1>
        <h2>Please enter your name below!</h2>
        <input placeholder="Leta" name='input' alt="name input box" value={this.state.input} onChange={e => this.handleInput(e)}></input>
        <button className="submit-btn" type="submit" value="Submit">Submit</button>
      </form>
    )
  }
}

export default Form;