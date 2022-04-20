import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import SignUpPage from './components/pages/SignUpPage'
import SignInPage from './components/pages/SignInPage'
import PasswordPage from './components/pages/PasswordPage'
import CUSTPage from './components/pages/CustomerPage'
import CartPage from './components/pages/CartPage'
import OrderPage from './components/pages/OrderPage'
import RECPPage from './components/pages/ReceptionistPage'
import MGRPage from './components/pages/ManagerPage'
import MGMTPage from './components/pages/ManagementPage'

export default function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/psd" element={<PasswordPage />} />
            <Route path="/cust" element={<CUSTPage />} />
            <Route path="/cust/cart" element={<CartPage />} />
            <Route path="/cust/order" element={<OrderPage />} />
            <Route path="/recp" element={<RECPPage />} />
            <Route path="/mgr" element={<MGRPage />} />
            <Route path="/mgr/mgmt" element={<MGMTPage />} />
          </Routes>
        </Router>
    )
}