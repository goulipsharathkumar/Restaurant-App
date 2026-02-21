import {useState} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import CartContext from './context/CartContext'
import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import './App.css'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const token = Cookies.get('jwt_token')
  return (
    <Route
      {...rest}
      render={props =>
        token !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

function App() {
  const [cartList, setCartList] = useState([])

  const removeAllCartItems = () => setCartList([])

  const addCartItem = dish => {
    const existing = cartList.find(item => item.dish_id === dish.dish_id)
    if (existing) {
      setCartList(prev =>
        prev.map(item =>
          item.dish_id === dish.dish_id
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      )
    } else {
      setCartList(prev => [...prev, {...dish, quantity: 1}])
    }
  }

  const removeCartItem = dishId => {
    setCartList(prev => prev.filter(item => item.dish_id !== dishId))
  }

  const incrementCartItemQuantity = dishId => {
    setCartList(prev =>
      prev.map(item =>
        item.dish_id === dishId ? {...item, quantity: item.quantity + 1} : item,
      ),
    )
  }

  const decrementCartItemQuantity = dishId => {
    setCartList(prev => {
      const updated = prev.map(item =>
        item.dish_id === dishId ? {...item, quantity: item.quantity - 1} : item,
      )
      return updated.filter(item => item.quantity > 0)
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        removeAllCartItems,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
