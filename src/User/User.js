import React, { useEffect, useState } from 'react'
import { getFavoriteDogs } from '../localStorage'
import './User.scss'

const User = (props) => {
  return (
    <section className="user-view">
      <h1>Your Favorite Dogs:</h1>
      <div className="fav-dogs">{props.favoriteDogs.map(dogData => (
        <img key={dogData.id} src={dogData.image} />
      )) }</div>
    </section>
  );
}

export default User;