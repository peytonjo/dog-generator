const getFavoriteDogs = () => {
  return (JSON.parse(localStorage.getItem('favoriteDogs')))
}

export { getFavoriteDogs }