import './App.scss';
import React from 'react'
import { Component } from 'react';
import { Switch, Route, Link, Router } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
// import Form from '../Form/Form';
import grassImg from '../grass.png'


class App extends Component {
  constructor() {
    super();
    this.state = {
      displayed: false
    }
  }

  displayedHomeBtn = (boolean) => {
    this.setState({ displayed: boolean })
  }


  render() {
    return (
      <div className="app">
        <main className="main-page">
          <nav>
            <NavBar />
          </nav>
          <article>
            <section className="home-view">
              <img className="dog-img"/>
              <button className="next-btn page-btns">next</button>
              <div>
                <h3>Have you become a dog person?</h3>
                <button className="answr-btn page-btns">yes</button>
                <button className="answr-btn page-btns">no</button>
              </div>
            </section>
            
          </article>
          <img 
            className="grass-img"
            src={grassImg}/>
        </main>
      </div>
    )
  }
}

export default App;
