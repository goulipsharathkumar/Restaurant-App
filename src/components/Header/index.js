import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'
import './index.css'

function Header() {
  const {cartList} = useContext(CartContext)
  const history = useHistory()
  const cartCount = cartList.length

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <header className="header">
      <div className="header-inner">
        <button
          type="button"
          className="header-brand-btn"
          onClick={() => history.push('/')}
        >
          <span className="header-logo">🍽</span>
          <h1 className="header-title">Taste of India</h1>
        </button>
        <div className="header-right">
          <span className="cart-label">My Orders</span>
          <button
            type="button"
            data-testid="cart"
            className="cart-icon-btn"
            onClick={() => history.push('/cart')}
          >
            <svg
              className="cart-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button type="button" className="logout-btn" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
