import DishCard from '../DishCard'
import './index.css'

function DishList({dishes}) {
  return (
    <div className="dish-list">
      {dishes.map(dish => (
        <DishCard key={dish.dish_id} dish={dish} />
      ))}
    </div>
  )
}

export default DishList
