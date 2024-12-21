import './components-style/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return(
    <header>
      <div>
        <img src="React-logo.webp" alt="react-logo" />
        <h1>React Projects</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={'/counter'}>Counter</Link>
          </li>
          <li>
            <Link to={'/background'}>Backgound</Link>
          </li>
          <li>
            <Link to={'/to-do-list'}>ToDoList</Link>
          </li>
          <li>
            <Link to={'/'}>Others</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar