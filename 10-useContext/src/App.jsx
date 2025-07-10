import React from 'react'
// import UseContext from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

export default function App() {
  return (
    <UserContextProvider>
      <h1>Hello cutie</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}
