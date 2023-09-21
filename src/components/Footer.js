import React from 'react'

const Footer = () => {
    return (
        <div className="footer footer-dark bg-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                            <img src="/images/logo.png" alt="" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center mt-5">
                            <a href="https://www.linkedin.com/search/results/people/?firstName=Affaq&lastName=Khan&origin=SEO_PSERP&sid=JWU" target='_blank'> <i class="fa fa-facebook-f text-white me-4" style={{ fontSize: "24px" }}></i> </a>
                            <i class="fa fa-linkedin text-white me-4" style={{ fontSize: "24px" }}></i>
                            <i class="fa fa-facebook-f text-white me-4" style={{ fontSize: "24px" }}></i>
                            <i class="fa fa-youtube text-white me-4" style={{ fontSize: "24px" }}></i>
                            <i class="fa fa-facebook-f text-white" style={{ fontSize: "24px" }}></i>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center text-white">
                            <h1>Top Movies</h1>
                            <p>Movie 1</p>
                            <p>Movie 2</p>
                            <p>Movie 3</p>
                            <p>Movie 4</p>
                            <p>Movie 5</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer