import React from 'react'
import { getFavoriteDogs } from '../localStorage'

const User = (props) => {

  return (
    <section className="user-view">
      <h1>Your Favorite Dogs:</h1>
      <div className="fav-dogs"></div>
    </section>

  )
}

export default User;