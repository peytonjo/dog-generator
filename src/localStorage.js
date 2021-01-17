//This files purpose is to hold functionality to send a favorited photo to loacl storage 

const getFavoriteDogs = () => {
  return(JSON.parse(localStorage.getItem('favoriteDogs')))
}

export { getFavoriteDogs }