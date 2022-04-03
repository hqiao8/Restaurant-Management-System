import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function CustomerPage() {
    return (
        <div className="main-page">
            <nav className="navbar">
                <Link to="">Profile</Link>
                <Link to="">Dependents</Link>
                <Link to="">Orders</Link>
                <Link to="">Coupons</Link>
                <Link to="/">Sign Out</Link>
            </nav>
            <section className="welcome-section">
                <h1>
                    Welcome back CUST 1!
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