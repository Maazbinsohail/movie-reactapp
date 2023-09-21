import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Popular.css";
const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((data) => data.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={1}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}  to={`/movie/${movie.id}`}
>
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}` }
                 alt=""/>
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  { movie.original_title}
                </div>
                <div className="posterImage__runtime">
                  {movie.release_date}
                  <span className="posterImage__rating">
                    {movie.vote_average}
                    <i
                    className="fas fa-star checked"
                    style={{ color: "gold" }}
                  />{" "}
                  </span>
                </div>
                 
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Popular;
