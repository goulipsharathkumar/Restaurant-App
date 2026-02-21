import './index.css'

function Counter({count, onAdd, onRemove}) {
  return (
    <div className="counter">
      {count > 0 ? (
        <>
          <button
            type="button"
            className="counter-btn minus"
            onClick={onRemove}
          >
            −
          </button>
          <span className="counter-value">{count}</span>
          <button type="button" className="counter-btn plus" onClick={onAdd}>
            +
          </button>
        </>
      ) : (
        <button type="button" className="add-btn" onClick={onAdd}>
          Add +
        </button>
      )}
    </div>
  )
}

export default Counter
