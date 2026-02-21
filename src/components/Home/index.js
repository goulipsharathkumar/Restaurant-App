import {useState, useEffect} from 'react'
import Header from '../Header'
import CategoryTabs from '../CategoryTabs'
import DishList from '../DishList'
import Loader from '../Loader'

const API_URL =
  'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

function Home() {
  const [menuData, setMenuData] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
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

  const restaurantName = menuData.length > 0 ? menuData[0].restaurant_name : ''
  const categories =
    menuData.length > 0 ? menuData[0]?.table_menu_list || [] : []
  const activeDishes = categories[activeCategory]?.category_dishes || []

  return (
    <div className="app">
      <Header />
      {loading && <Loader />}
      {error && <p className="error-msg">{error}</p>}
      {!loading && !error && (
        <>
          <h1 className="restaurant-name">{restaurantName}</h1>
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          <DishList dishes={activeDishes} />
        </>
      )}
    </div>
  )
}

export default Home
