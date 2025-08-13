import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.tsx'
import Layout from './Layout/Layout.tsx'
import {BrowserRouter, Route, Routes} from "react-router"
import Registration from './pages/Registration/Registration.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
