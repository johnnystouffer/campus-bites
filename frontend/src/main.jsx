import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/pages/Home.jsx'
import Login from './assets/pages/Login.jsx'
import Register from './assets/pages/Register.jsx'
import "./main.css"
import PostForm from './assets/pages/PostForm.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
  },
  {
    path : '/login',
    element : <Login></Login>,
  },
  {
    path : '/register',
    element : <Register></Register>
  },
  {
    path : '/postevent',
    element : <PostForm></PostForm>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
