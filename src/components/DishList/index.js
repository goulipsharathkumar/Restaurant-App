import './index.css'
import DishCard from '../DishCard'

function DishList({dishes, cartItems, onAdd, onRemove}) {
  if (!dishes || dishes.length === 0) {
    return (
      <div className="empty-msg">
        <p>No dishes available in this category.</p>
      </div>
    )
  }

  return (
    <div className="dish-list">
      <div className="dish-list-inner">
        {dishes.map(dish => (
          <DishCard
            key={dish.dish_id}
            dish={dish}
            count={cartItems[dish.dish_id] || 0}
            onAdd={() => onAdd(dish.dish_id)}
            onRemove={() => onRemove(dish.dish_id)}
          />
        ))}
      </div>
    </div>
  )
}

export default DishList
