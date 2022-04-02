import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import SignInPage from './components/pages/SignInPage'
import SignUpPage from './components/pages/SignUpPage'
import CUSTPage from './components/pages/CustomerPage'
import RECPPage from './components/pages/ReceptionistPage'
import MGRPage from './components/pages/ManagerPage'

// import './App.css'

export default function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cust" element={<CUSTPage />} />
            <Route path="/recp" element={<RECPPage />} />
            <Route path="/mgr" element={<MGRPage />} />
          </Routes>
        </Router>
    )
}