// header js
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill, BsArrowBarRight} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="link-item">
          <img
            alt="website logo"
            className="website-logo"
            src="https://res.cloudinary.com/drnrrd97f/image/upload/v1711695559/vyvt2ebgwq7ogvsgqzcc.png"
          />
        </Link>
        <ul className="nav-menu">
          <Link to="/" className="link-item">
            <li className="menu-item"> Home </li>
          </Link>
          <Link to="/jobs" className="link-item">
            <li className="menu-item"> Find Jobs </li>
          </Link>
        </ul>
        <button className="logout-btn" onClick={logout} type="button">
          {' '}
          Logout{' '}
        </button>
      </div>

      <div className="nav-mobile-content">
        <Link to="/" className="linn-item">
          <img
            alt="website logo"
            className="website-logo"
            src="https://res.cloudinary.com/drnrrd97f/image/upload/v1711695559/vyvt2ebgwq7ogvsgqzcc.png"
          />
        </Link>
        <ul className="nav-menu-mobile">
          <Link to="/" className="link-item">
            <li className="menu-item">
              {' '}
              <AiFillHome size="20" />{' '}
            </li>
          </Link>
          <Link to="/jobs" className="link-item">
            <li className="menu-item">
              {' '}
              <BsFillBriefcaseFill size="20" />{' '}
            </li>
          </Link>
          <li className="menu-item" onClick={logout}>
            {' '}
            <BsArrowBarRight size="20" />{' '}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
