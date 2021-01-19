import React, { Component } from 'react'
import heartIcon from '../icons/heart.png'
import { NavLink } from 'react-router-dom'
import { getFavoriteDogs } from '../localStorage';
import './RandomDog.scss'

const RandomDog = (props) => {

  const addFavDog = () => {
    const favDog = {
      id: Date.now(),
      image: props.image,
    }
    const favoritedDogs = getFavoriteDogs() ? getFavoriteDogs() : []
    const foundDog = favoritedDogs.find(dog => dog.image === favDog.image)


    if (!foundDog) {
      favoritedDogs.push(favDog)
    } else {
      window.alert("You already liked this photo!")
    }

    localStorage.setItem('favoriteDogs', JSON.stringify(favoritedDogs))

    props.setFavoriteDogs(favoritedDogs)
  }

  return (
    <section className="home-view">
      <img className="dog-img" alt="dog photo" src={props.image} />
      <button className="fav-btn">
        <img
          className="fav-icon"
          alt="favorite icon"
          src={heartIcon}
          role="button"
          onClick={addFavDog}
        />
      </button>
      <button className="next-btn page-btns" onClick={props.loadDogImg}>next</button>
      <div>
        <h3>Have you become a dog person yet?</h3>
        <NavLink to="/form-view">
          <button className="answr-btn page-btns" onClick={props.congratsAlert}>yes</button>
        </NavLink>
        <button className="answr-btn page-btns" onClick={props.ashamedAlert}>no</button>
      </div>
    </section>
  )
}

export default RandomDog;