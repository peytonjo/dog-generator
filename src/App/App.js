import './App.scss';
import React from 'react'
import { Component } from 'react';
import { Switch, Route, Link, Router } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import RandomDog from '../RandomDog/RandomDog';
import User from '../User/User'
import Form from '../Form/Form'
import { getRandomDog } from '../ApiCalls';
import grassImg from '../grass.png';
import { getFavoriteDogs } from '../localStorage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
      status: '',
      displayed: false,
      favoriteDogs: []
    }
  }

  displayedHomeBtn = (boolean) => {
    this.setState({ displayed: boolean })
  }

  componentDidMount() {
    this.loadDogImg()
    const favoriteDogs = getFavoriteDogs()
    if (favoriteDogs) {
      this.setState({favoriteDogs: favoriteDogs})
    }
  }

  setFavoriteDogs = (favoriteDogs) => {
    this.setState({favoriteDogs: favoriteDogs})
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
                  <User favoriteDogs={this.state.favoriteDogs}/>
                )
              }}>
            </Route>  
            <Route 
              exact
              path="/form-view" 
              render={() => {
                return (
                  <Form />
                )
              }}>
            </Route>       
          </Switch>         
          <img 
            className="grass-img"
            src={grassImg}/>
        </main>
      </div>
    )
  }
}

export default App;
