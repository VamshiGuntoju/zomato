import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login/Login'
import GetTheApp from './GetTheApp/GetTheApp'
import InvestorRelations from './InvestorRelations/InvestorRelations'
import AddRestaurant from './AddRestaurant/AddRestaurant'
import Signup from './Signup/Signup'
import BackgroundImg from './BackgroundImg/BackgroundImg'
import Order from './Order/Order'

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<BackgroundImg />} />
     <Route path='/GetTheApp' element={<GetTheApp />} />
     <Route path='/InvestorRelations' element={<InvestorRelations />} />
     <Route path='/AddRestaurant' element={<AddRestaurant />} />
     <Route path='/Login' element={<Login />} />
     <Route path='/Signup' element={<Signup />} />
     <Route path='/Order' element={<Order />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
