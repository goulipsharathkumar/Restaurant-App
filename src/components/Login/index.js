import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

function Login({history}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  if (Cookies.get('jwt_token') !== undefined) {
    return <Redirect to="/" />
  }

  const onSubmit = async e => {
    e.preventDefault()
    const response = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
    })
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      setErrorMsg(data.error_msg)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-brand">🍽 Taste of India</h1>
        <p className="login-sub">Sign in to your account</p>
        <form onSubmit={onSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              className="form-input"
              placeholder="Enter username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              className="form-input"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          {errorMsg && <p className="login-error">*{errorMsg}</p>}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
