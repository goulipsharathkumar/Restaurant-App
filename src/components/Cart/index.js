import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import Header from '../Header'
import CartItem from '../CartItem'
import './index.css'

function Cart() {
  const {cartList, removeAllCartItems} = useContext(CartContext)
  const isEmpty = cartList.length === 0

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-content">
        <div className="cart-top-row">
          <h1 className="cart-heading">My Cart</h1>
          {!isEmpty && (
            <button
              type="button"
              className="remove-all-btn"
              onClick={removeAllCartItems}
            >
              Remove All
            </button>
          )}
        </div>
        {isEmpty ? (
          <div className="empty-cart">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
              alt="empty cart"
              className="empty-cart-img"
            />
            <h2 className="empty-cart-title">No Order Yet!</h2>
            <p className="empty-cart-sub">
              Your cart is empty. Add some delicious dishes!
            </p>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cartList.map(item => (
                <CartItem key={item.dish_id} item={item} />
              ))}
            </ul>
            <div className="cart-total">
              <span className="total-label">Order Total:</span>
              <span className="total-value">
                {cartList[0]?.dish_currency}{' '}
                {cartList
                  .reduce(
                    (sum, item) => sum + item.dish_price * item.quantity,
                    0,
                  )
                  .toFixed(2)}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
