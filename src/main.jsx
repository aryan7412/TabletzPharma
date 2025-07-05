import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {AboutUs,Home,Contact,Gallery,Products} from './pages/pages.js'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="aboutus" element={<AboutUs/>} />
      <Route path="gallery" element={<Gallery/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="products" element={<Products/>} />
      <Route path="products/:category" element={<Products/>} />
    </Route>
  )
)

function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AosInit />
    <RouterProvider router={router} />
  </StrictMode>,
)
