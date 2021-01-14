import './NavBar.scss'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="title-tag">
        <h1>Dog Lovers</h1>
        <h2>Become a dog person today!</h2>
      </div>
      <NavLink to="/favorites">
        <button className="fav-btn btn" role="button">view favorites</button>
      </NavLink>
    </nav>
  )
}

export default NavBar;