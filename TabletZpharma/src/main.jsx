import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {AboutUs,Home,Contact,Gallery,Products} from './pages/pages.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="aboutus" element={<AboutUs/>} />
      <Route path="gallery" element={<Gallery/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="products" element={<Products/>} />
      <Route path="products/:category" element={<Products/>} />
      <Route path="*" element={<Home/>} />
    </Route>
  ),
  {
    basename: '/'
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
