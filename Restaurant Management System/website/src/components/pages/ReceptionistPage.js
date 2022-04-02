import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ReceptionistPage() {
    return (
        <div className="main-page">
            <nav className="navbar">
                <Link to="">Profile</Link>
                <Link to="/">Sign Out</Link>
            </nav>
            <section className="welcome-section">
                <h1>
                    Welcome back RECP 1!
                </h1>
            </section>
            <div className="recp-view">
                <label>
                    Orders
                </label>
                <label>
                    Delivery Drivers
                </label>
            </div>
        </div>
    )
}