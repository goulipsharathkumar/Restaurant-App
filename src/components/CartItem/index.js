import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

function CartItem({item}) {
  const {
    removeCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = useContext(CartContext)

  const {
    dish_id: dishId,
    dish_name: dishName,
    dish_image: dishImage,
    dish_price: dishPrice,
    dish_currency: dishCurrency,
    quantity,
  } = item

  const totalPrice = (dishPrice * quantity).toFixed(2)

  return (
    <li className="cart-item">
      <img src={dishImage} alt={dishName} className="cart-item-img" />
      <div className="cart-item-info">
        <h3 className="cart-item-name">{dishName}</h3>
        <p className="cart-item-price">
          {dishCurrency} {totalPrice}
        </p>
      </div>
      <div className="cart-item-controls">
        <div className="qty-controls">
          <button
            type="button"
            className="qty-btn"
            onClick={() => decrementCartItemQuantity(dishId)}
          >
            -
          </button>
          <span className="qty-num">{quantity}</span>
          <button
            type="button"
            className="qty-btn"
            onClick={() => incrementCartItemQuantity(dishId)}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="remove-item-btn"
          onClick={() => removeCartItem(dishId)}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CartItem
