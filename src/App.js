import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import SignInPage from './components/pages/SignInPage'
import SignUpPage from './components/pages/SignUpPage'
import HomePage from './components/pages/HomePage'

import './App.css'

export default function App() {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={ LandingPage } />
            <Route path="/signin" element={ SignInPage } />
            <Route path="/signup" element={ SignUpPage } />
            <Route path="/home" element={ HomePage } />
          </Routes>
        </Router>
      </div>
    )
}