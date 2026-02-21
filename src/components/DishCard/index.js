import {useState, useContext} from 'react'
import CartContext from '../../context/CartContext'
import Counter from '../Counter'
import './index.css'

function DishCard({dish}) {
  const [count, setCount] = useState(0)
  const [imgError, setImgError] = useState(false)
  const {addCartItem} = useContext(CartContext)

  const hasAddons = dish.addonCat && dish.addonCat.length > 0
  const isVeg = dish.dish_Type === 2

  const onAdd = () => setCount(prev => prev + 1)
  const onRemove = () => setCount(prev => (prev > 0 ? prev - 1 : 0))

  const onAddToCart = () => {
    addCartItem({...dish, quantity: count})
  }

  return (
    <div className="dish-card">
      <div className="dish-info">
        <span className={`veg-indicator ${isVeg ? 'veg' : 'nonveg'}`}>
          <span className="veg-dot" />
        </span>
        <h3 className="dish-name">{dish.dish_name}</h3>
        <div className="dish-meta">
          <span className="dish-price">
            {dish.dish_currency} {dish.dish_price}
          </span>
        </div>
        <p className="dish-description">{dish.dish_description}</p>
        <p className="dish-calories">{dish.dish_calories} calories</p>
        {hasAddons && (
          <p className="customization-text">Customizations available</p>
        )}
        {dish.dish_Availability ? (
          <div className="dish-actions">
            <Counter count={count} onAdd={onAdd} onRemove={onRemove} />
            {count > 0 && (
              <button
                type="button"
                className="add-to-cart-btn"
                onClick={onAddToCart}
              >
                ADD TO CART
              </button>
            )}
          </div>
        ) : (
          <>
            <Counter count={count} onAdd={onAdd} onRemove={onRemove} />
            <p className="not-available">Not available</p>
          </>
        )}
      </div>
      <div className="dish-image-wrap">
        {!imgError && dish.dish_image ? (
          <img
            src={dish.dish_image}
            alt={dish.dish_name}
            className="dish-image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="dish-image-placeholder">🍽</div>
        )}
      </div>
    </div>
  )
}

export default DishCard
