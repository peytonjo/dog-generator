import React, { Component } from 'react'
// import { getRandomDog } from '../ApiCalls';
import heartIcon from '../heart.png'
import { NavLink } from 'react-router-dom'
import './RandomDog.scss'
import { getFavoriteDogs } from '../localStorage';

//this component will display a random image on the screen 
//hold functionality to add image to loacl storage 

class RandomDog extends Component {
  constructor(props) {
    super(props);
  }


  addFavDog = (e) => {
    const favDog = {
      id: Date.now(),
      image: this.props.image,
    }
    let favoritedDogs = getFavoriteDogs()
    console.log('favoritedDogs', favoritedDogs)
    favoritedDogs ? favoritedDogs.push(favDog) : favoritedDogs = [favDog]

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
          <button className="answr-btn page-btns">no</button>
        </div>
      </section>
    )
  }
}

export default RandomDog;