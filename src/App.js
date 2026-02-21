// eslint-disable-next-line
import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import CategoryTabs from './components/CategoryTabs'
import DishList from './components/DishList'
import Loader from './components/Loader'

const API_URL =
  'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

function App() {
  const [menuData, setMenuData] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  const [cartItems, setCartItems] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setMenuData(data)
      } catch (err) {
        setError('Failed to load menu. Please try again.')
      } finally {
        setLoading(false)
      }
    }
    fetchMenu()
  }, [])

  const totalCartCount = Object.values(cartItems).reduce((sum, c) => sum + c, 0)

  const handleAdd = dishId => {
    setCartItems(prev => ({...prev, [dishId]: (prev[dishId] || 0) + 1}))
  }

  const handleRemove = dishId => {
    setCartItems(prev => {
      const current = prev[dishId] || 0
      if (current <= 1) {
        const updated = {...prev}
        delete updated[dishId]
        return updated
      }
      return {...prev, [dishId]: current - 1}
    })
  }

  const categories =
    menuData.length > 0 ? menuData[0]?.table_menu_list || [] : []
  const activeDishes = categories[activeCategory]?.category_dishes || []

  return (
    <div className="app">
      <Header cartCount={totalCartCount} />
      {loading && <Loader />}
      {error && <p className="error-msg">{error}</p>}
      {!loading && !error && (
        <>
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          <DishList
            dishes={activeDishes}
            cartItems={cartItems}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        </>
      )}
    </div>
  )
}

export default App
