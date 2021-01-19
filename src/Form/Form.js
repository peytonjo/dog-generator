import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Form/Form.scss'
import confettiImg from '../icons/confetti.png'

const Form = (props) => {
  return (
    <form className="form">
      <h1>Congrats on leaving the dark side and becoming a dog person!!!!!</h1>
      <img src={confettiImg} alt="confetti icon" className="confetti-icon" />
      <h2>Please enter your name below!</h2>
      <input
        placeholder="Leta" name='input'
        alt="name input box"
        onChange={e => props.setName(e.target.value)}>
      </input>
      <NavLink to="/user-favorites">
        <button className="submit-btn" type="submit" value="Submit">Submit</button>
      </NavLink>
    </form>
  )
}

export default Form;