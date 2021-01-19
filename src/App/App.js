import './App.scss';
import React from 'react'
import { Component } from 'react';
import { Switch, Route, Link, Router } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import RandomDog from '../RandomDog/RandomDog';
import User from '../User/User'
import Form from '../Form/Form'
import { getRandomDog } from '../ApiCalls';
import grassImg from '../icons/grass.png';
import { getFavoriteDogs } from '../localStorage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
      status: '',
      userName: '',
      favoriteDogs: [],
    }
  }

  componentDidMount() {
    this.loadDogImg()
    const favoriteDogs = getFavoriteDogs()
    if (favoriteDogs) {
      this.setState({ favoriteDogs: favoriteDogs })
    }
  }

  setFavoriteDogs = (favoriteDogs) => {
    this.setState({ favoriteDogs: favoriteDogs })
  }

  setName = (userName) => {
    this.setState({ userName: userName })
  }

  loadDogImg = () => {
    getRandomDog()
      .then(data => this.setState({ image: data.message }))
      .catch(data => this.setState({ status: data.status }))
  }

  congratsAlert = () => {
    window.alert('WHOOOO HOOOOO');
  }

  ashamedAlert = () => {
    window.alert('BOOOOOOOO....try again')
  }

  render() {
    return (
      <div className="app">
        <main className="main-page">
          <nav>
            <NavBar />
          </nav>
          <Switch>
            <Route
              exact
              path='/'
              render={() => {
                return (
                  <RandomDog
                    image={this.state.image}
                    loadDogImg={this.loadDogImg}
                    congratsAlert={this.congratsAlert}
                    ashamedAlert={this.ashamedAlert}
                    setFavoriteDogs={this.setFavoriteDogs}
                  />
                )
              }}>
            </Route>
            <Route
              exact
              path="/user-favorites"
              render={() => {
                return (
                  <User favoriteDogs={this.state.favoriteDogs} userName={this.state.userName} />
                )
              }}>
            </Route>
            <Route
              exact
              path="/form-view"
              render={() => {
                return (
                  <Form setName={this.setName} userName={this.state.userName} favoriteDogs={this.state.favoriteDogs} />
                )
              }}>
            </Route>
          </Switch>
          <img
            className="grass-img"
            src={grassImg} />
        </main>
      </div>
    )
  }
}

export default App;
