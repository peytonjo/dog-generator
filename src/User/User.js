import './User.scss'
import React from 'react'
import sadFace from '../icons/sad.png'

const User = (props) => {
  const hasName = props.userName;
  const uniqueGreeting = (`Hello ${props.userName}, here are your favorite dogs:`);
  const defaultGreeting = (`Your Favorite Dogs:`);
  let photos = [];

  const emptyFavorites = (
    <div className="empty-favs-message">
      <h2>UH OH! Looks as though you haven't liked any dogs yet! </h2>
      <img
        className="sad-icon"
        src={sadFace}
        alt="sad face image"
      />
    </div>
  );

  if (props.favoriteDogs.length) {
    photos = props.favoriteDogs.map(dogData => (
      <img key={dogData.id} src={dogData.image} />
    ));
  }


  return (
    <section className="user-view">
      <h1>{hasName ? uniqueGreeting : defaultGreeting}</h1>
      <div className="fav-dogs">
        {photos.length > 0 ? photos : emptyFavorites}
      </div>
    </section>
  );
}

export default User;