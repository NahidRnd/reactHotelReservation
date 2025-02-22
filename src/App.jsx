import './App.css'
import Navbar from './Components/Navbar'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, useSearchParams } from "react-router-dom"
import AppLayout from './Components/AppLayout/AppLayout'
import Hotels from './Components/Hotels/Hotels'
import HotelsProvider from './context/HotelsProvider'
import SingleHotel from './Components/Hotels/SingleHotel'
import Home from './Components/Home'
import HotelsFilter from './Components/Hotels/HotelsFilter'
import BookProvider from './context/BookProvider'
import AuthProvider from './context/AuthProvider'
import Login from './Components/Login/Login'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import Dashboard from './Components/Login/Dashboard'
import City from './Components/City/City'
import CityLayout from './Components/AppLayout/CityLayout'
import AllReviews from './Components/Testimonials/AllReviews'


function App() {


  return (
    <AuthProvider>
      <BookProvider>
        <HotelsProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/testimonials' element={<AllReviews />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Account'>
              <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Route>
            <Route path='/hotels' element={<AppLayout/>}>
              <Route index element={<Hotels />} />
              <Route path=':id' element={<SingleHotel />} />
              <Route path=':d' element={<HotelsFilter />} />
            </Route>
            <Route path='/city' element={<CityLayout/>}>
              <Route path=':id' element={<City />} />
            </Route>
          </Routes>
        </HotelsProvider>
      </BookProvider>
    </AuthProvider>
  )
}

export default App
