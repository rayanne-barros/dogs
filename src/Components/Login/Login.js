import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="criar" element={<LoginPasswordLost />} />
        <Route path="criar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  )
}

export default Login