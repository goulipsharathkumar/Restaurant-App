import './index.css'

function Counter({count, onAdd, onRemove}) {
  return (
    <div className="counter">
      <button type="button" className="counter-btn minus" onClick={onRemove}>
        -
      </button>
      <span className="counter-value">{count}</span>
      <button type="button" className="counter-btn plus" onClick={onAdd}>
        +
      </button>
    </div>
  )
}

export default Counter
