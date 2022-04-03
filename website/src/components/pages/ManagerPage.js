import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ManagerPage() {
    return (
        <div className="main-page">
            <nav className="navbar">
                <Link to="">Profile</Link>
                <Link to="/">Sign Out</Link>
            </nav>
            <section className="welcome-section">
                <h1>
                    Welcome back MGR 1!
                </h1>
            </section>
            <div className="tab">
                <button>
                    Receptionists
                </button>
                <button>
                    Delivery Drivers
                </button>
                <button>
                    Orders
                </button>
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