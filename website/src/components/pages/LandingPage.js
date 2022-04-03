import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function LandingPage() {
    return (
        <div className="main-page">
            <nav className="navbar">
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
            </nav>
            <section className="welcome-section">
                <h1>
                    Welcome to Restaurant 471!
                </h1>
            </section>
            <div className="tab">
                <button>
                    Appetizer
                </button>
                <button>
                    Breakfast
                </button>
                <button>
                    Lunch/Dinner
                </button>
                <button>
                    Dessert
                </button>
                <button>
                    Beverage
                </button>
            </div>
        </div>
    )
}