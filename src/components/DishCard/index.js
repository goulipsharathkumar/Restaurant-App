// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './index.css'
import Counter from '../Counter'

function DishCard({dish, count, onAdd, onRemove}) {
  const [imgError, setImgError] = useState(false)
  const hasAddons = dish.addonCat && dish.addonCat.length > 0
  const isVeg = dish.dish_Type === 2

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
          <span className="dish-calories">{dish.dish_calories} cal</span>
        </div>
        <p className="dish-description">{dish.dish_description}</p>
        {hasAddons && (
          <p className="customization-text">Customizations available</p>
        )}
        {dish.dish_Availability ? (
          <Counter count={count} onAdd={onAdd} onRemove={onRemove} />
        ) : (
          <p className="not-available">Not available</p>
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
