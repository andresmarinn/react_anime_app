import { Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
        <ul className='navList'>
          <Link to="/">
            <li className='navItem'>
              Schedule
            </li>
          </Link>
          <Link to="/favorites">
            <li className='navItem'>
              Favorites
            </li>
          </Link>
        </ul>
    </nav>
  )
}

export default Navigation