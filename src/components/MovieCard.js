import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
    return (
        <>
        <Link to = {`/movie/${movie.id}`} style={{textDecoration : "none", color : "white"}}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" style={{ width: "250px", height: "350px" }} />
            <h2 className=" mt-3 mb-5 text-center" style={{ fontSize: "20px" }}>
            {movie.title}
          </h2>
          <div className="row text-center mt-2 mb-2">
            <div className="col6">
              <p>{movie.release_date}</p>
            </div>
            <div className="col6">
              <p className="fas fa-star checked" style={{ color: "gold" }}> {movie.vote_average}</p>
            </div>
          </div>
            </Link>
        </>
    )
}

export default MovieCard