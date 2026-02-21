import './index.css'

function CategoryTabs({categories, activeCategory, onSelectCategory}) {
  return (
    <div className="tabs-wrapper">
      <div className="tabs-scroll">
        {categories.map((category, index) => (
          <button
            type="button"
            key={category.menu_category}
            className={`tab-btn ${activeCategory === index ? 'active' : ''}`}
            onClick={() => onSelectCategory(index)}
          >
            {category.menu_category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryTabs
