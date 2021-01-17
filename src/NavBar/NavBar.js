import './NavBar.scss'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="title-tag">
        <h1>Dog Lovers</h1>
        <h2>Become a dog person today!</h2>
      </div>
      <div className="nav-btns">
        <NavLink to="/user-favorites">
          <button className="favorites-btn btn">view favorites</button>
        </NavLink>
        <NavLink to="/">
          <button className="btn">home</button>
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar;