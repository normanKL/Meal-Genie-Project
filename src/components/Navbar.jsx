// src/components/Navbar.jsx

import { Link } from "react-router-dom"
import React from "react"

function Navbar() {
    return (
      <>
        <header>
          <nav className="navbar is-dark">
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/randommeal" className="navbar-item">Random Meal Recipe</Link>
                <Link to="/searchbyname" className="navbar-item">Find Recipes</Link>
                {/* <Link to="/products/sage-barista-pro" className="navbar-item">
                  Best Coffee Machine
                </Link> */}
              </div>
            </div>
          </nav>
        </header>
      </>
    )
  }
  
  export default Navbar