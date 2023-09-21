import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <img src="/images/logo.png" alt="" style={{height : "60px", width : "150px"}} />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                  </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to = "/movies/popular">Popular</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to = "/movies/top_rated">Top Rated</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to = "/movies/upcoming">Upcoming</Link>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar