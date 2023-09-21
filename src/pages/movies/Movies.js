import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';

const Movies = () => {

    const {type} = useParams()
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
    },[]);

    useEffect(() => {
        getMovies()
    },[type]);

    const getMovies = async () => {
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
            setMovies(data.results)
        } catch (error) {
            console.log(error);
        }
    }

    console.log(movies);
  return (
    <>
        <div className="container text-white">
            <h1 className='text-center mt-4 mb-4'>{(type ? type : "Popular").toUpperCase()}</h1>

            <div className="row">
                    {
                        movies.map((movie) => (
                            <>
                                <div className="col-lg-3 col-md-3 col-sm-12 text-center" >

                                    <MovieCard movie = {movie}/>
                                </div>
                            </>
                        ))
                    }
                </div>
        </div>
    </>
  )
}

export default Movies