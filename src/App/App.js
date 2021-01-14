import './App.css';
import { Component } from 'react'
import { Switch, Route, Link, Router } from "react-router-dom"
import NavBar from '../NavBar/NavBar'

class App extends Component {
  Constructor {
  super()
  this.state = {
    displayed: false
  }
}

displayedHomeBtn = (boolean) => {
  this.setState({ displayed: boolean })
}


render() {
  return (
    <div className="App">
      <main className="main-page">
        <nav>
          <NavBar />
        </nav>
        <Switch>
          <Route
            exact
            path='/'></Route>
          <Form />
          <Route
            exact
            path='/user-page'>
            <User />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;
