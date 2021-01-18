import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Form/Form.scss'
import confettiImg from '../confetti.png'


//create function in app 
//function should take in the inputs value and set it to state 
//function should be passed through props to the form
//form should have a conditional render based on the Apps states
//if the state is a empty string render personal message 
//else render default message

const Form = (props) => {

  return (
    <form className="form">
      <h1>Congrats on leaving the dark side and becoming a dog person!!!!!</h1>
      <img src={confettiImg} alt="confetti icon" className="confetti-icon"/>
      <h2>Please enter your name below!</h2>
      <input placeholder="Leta" name='input' alt="name input box" onChange={e => props.setName(e.target.value)}></input>
      <NavLink to="/user-favorites">
        <button className="submit-btn" type="submit" value="Submit">Submit</button>
      </NavLink>
    </form>
  )  
}

export default Form;