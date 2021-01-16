import React, { Component } from 'react'
// import { getRandomDog } from '../ApiCalls';
import heartIcon from '../heart.png'
import { NavLink } from 'react-router-dom'
import './RandomDog.scss'

//this component will display a random image on the screen 
//hold functionality to add image to loacl storage 

const RandomDog = (props) => {
  let image = props.image

  // addFavDog = (e) => {
  //   const favDog = {
  //     id: Date.now(),
  //     image: '',
  //   }
  //     const favoritedDogs = JSON.parse(localStorage.getItem('favoriteDogs'))
  //     favoritedDogs.push(favDog)
  //     localStorage.setItem('favoriteDogs', JSON.stringify(favoritedDogs))
  // }

  return (
    <section className="home-view">
      <img className="dog-img" alt="dog photo" src={image}/>
      <button className="fav-btn">
        <img
          className="fav-icon"
          alt="favorite icon"
          src={heartIcon}
          role="button"
        />
      </button>
      <button className="next-btn page-btns" onClick={props.loadDogImg}>next</button>
      <div>
        <h3>Have you become a dog person yet?</h3>
        <NavLink to="/form-view">
          <button className="answr-btn page-btns" onClick={props.congratsAlert}>yes</button>
        </NavLink>
        <button className="answr-btn page-btns">no</button>
      </div>
    </section>
  )
}

export default RandomDog;