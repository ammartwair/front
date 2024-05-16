import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import { jwtDecode } from 'jwt-decode'
import { ToastContainer } from 'react-toastify';
import { Offline, Online } from 'react-detect-offline'
import SendCode from './components/SendCode'
import ChangePassword from './components/ChangePassword/ChangePassword'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import ProtectedRouter from './components/ProtectedRouter/ProtectedRouter.jsx'

export default function App() {
  let [user, setUser] = useState(null);
  function saveCurrentUser() {

    let token = localStorage.getItem('userToken');
    let decoded = jwtDecode(token);
    setUser(decoded);
  }

  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      saveCurrentUser();
    }
  }, [])

  let routers = createBrowserRouter([
    {
      path: '', element: <Layout user={user} setUser={setUser} />, children: [
        { index: true, element: <Home /> },
        { path: 'Register', element: <Register /> },
        { path: 'About', element: <About /> },
        { path: 'Dashboard', element: <ProtectedRouter><Dashboard /></ProtectedRouter> },
        { path: 'Login', element: <Login saveCurrentUser={saveCurrentUser} /> },
        { path: 'SendCode', element: <SendCode /> },
        { path: 'ChangePassword', element: <ChangePassword /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])

  return (
    <>
      <Offline>Only shown offline (surprise!)</Offline>
      <Online>

        <ToastContainer />
        <RouterProvider router={routers}></RouterProvider>

      </Online>
    </>
  )
}
