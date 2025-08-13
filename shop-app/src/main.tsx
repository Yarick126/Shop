import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.tsx'
import Layout from './Layout/Layout.tsx'
import {BrowserRouter, Route, Routes} from "react-router"
import SignIn from './pages/SignIn/SignIn.tsx'
import SignUp from './pages/SignUp/SignUp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
