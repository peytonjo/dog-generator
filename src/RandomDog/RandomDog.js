import React, { Component } from 'react'
import heartIcon from '../heart.png'
import { NavLink } from 'react-router-dom'
import { getFavoriteDogs } from '../localStorage';
import './RandomDog.scss'

//this component will display a random image on the screen 
//hold functionality to add image to local storage 
//-------
//function should create a favDog object 
//see if favoritedDogs is an empty array
//if not push new favorited dog into the array 
//else make it an array with the favdog
//-------
//check get local storage for if the array includes the image 
//if not push into the array
//

class RandomDog extends Component {
  constructor(props) {
    super(props);
  }

  addFavDog = () => {
    const favDog = {
      id: Date.now(),
      image: this.props.image,
    }
    const favoritedDogs = getFavoriteDogs() ? getFavoriteDogs() : []
    const foundDog = favoritedDogs.find(dog => dog.image === favDog.image)


    if(!foundDog) {
      favoritedDogs.push(favDog)
    } else {
      window.alert("You already liked this photo!")
    }

    localStorage.setItem('favoriteDogs', JSON.stringify(favoritedDogs))

    this.props.setFavoriteDogs(favoritedDogs)
  }

  render() {
    return (
      <section className="home-view">
        <img className="dog-img" alt="dog photo" src={this.props.image} />
        <button className="fav-btn">
          <img
            className="fav-icon"
            alt="favorite icon"
            src={heartIcon}
            role="button"
            onClick={this.addFavDog}
          />
        </button>
        <button className="next-btn page-btns" onClick={this.props.loadDogImg}>next</button>
        <div>
          <h3>Have you become a dog person yet?</h3>
          <NavLink to="/form-view">
            <button className="answr-btn page-btns" onClick={this.props.congratsAlert}>yes</button>
          </NavLink>
          <button className="answr-btn page-btns" onClick={this.props.ashamedAlert}>no</button>
        </div>
      </section>
    )
  }
}

export default RandomDog;