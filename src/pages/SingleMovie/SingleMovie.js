import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

import Audio from "../../assets/loader.svg"
import "./single.css"
import LittleCard from '../../components/LittelCard/LittleCard'
import Actors from '../../components/Actors/Actors'


const SingleMovie = () => {

    const { id } = useParams()

    const [movie, setMovie] = useState({
        isFatched: false,
        data: {},
        error: null,
    })

    const [movieTriller, setMovieTriller] = useState({
        isFatched: false,
        data: {},
        error: null,
    })

    const [recommendationsMovies, setRecomendationsMovies] = useState({
        isFatched: false,
        data: {},
        error: null,
    })

    const [actors, setActors] = useState({
        isFatched: false,
        data: {},
        error: null,
    })

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_MOVIE_API + '/movie/' + id, {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY,
                }
            })
            .then((response) => {
                setMovie({
                    isFatched: true,
                    data: response.data,
                    error: false,
                })
            })
            .catch((error) => {
                setMovie({
                    isFatched: true,
                    data: {},
                    error: true,
                })
            })

        axios
            .get(process.env.REACT_APP_MOVIE_API + '/movie/' + id + '/videos', {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY,
                }
            })
            .then((response) => {
                setMovieTriller({
                    isFatched: true,
                    data: response.data,
                    error: false,
                })
            })
            .catch((error) => {
                setMovieTriller({
                    isFatched: true,
                    data: {},
                    error: true,
                })
            })

        axios
            .get(process.env.REACT_APP_MOVIE_API + '/movie/' + id + '/recommendations', {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY,
                }
            })
            .then((response) => {
                setRecomendationsMovies({
                    isFatched: true,
                    data: response.data,
                    error: false,
                })
            })
            .catch((error) => {
                setRecomendationsMovies({
                    isFatched: true,
                    data: {},
                    error: true,
                })
            })

        axios
            .get(process.env.REACT_APP_MOVIE_API + '/movie/' + id + '/credits', {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY,
                }
            })
            .then((response) => {
                setActors({
                    isFatched: true,
                    data: response.data,
                    error: false,
                })
            })
            .catch((error) => {
                setActors({
                    isFatched: true,
                    data: {},
                    error: true,
                })
            })

    }, [id])

    const style = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.data.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"

    }

    return (
        <div style={style} className='single'>

            {/* ACTORS */}
            <div className='actors' >
                <h2>Actors</h2>

                {
                    actors.isFatched &&
                    (
                        actors.data.cast.map(item => <Actors obj={item} key={item.id} />)
                    )
                }

            </div>

            {/* ABOUT CONTENT */}
            <div className='content'>
                {
                    movie.isFatched ?
                        (
                            <>

                                <h2>{movie.data.title}</h2>
                                <p> {movie.data.overview}</p>

                                {
                                    movie.isFatched ? movie.data.genres.map(item => (
                                        <button key={item.id}>{item.name}</button>
                                    )) : ""
                                }

                                {
                                    movieTriller.isFatched ?
                                        (
                                            <div
                                                style={{
                                                    width: "100%",
                                                    height: "400px",
                                                    overflowY: 'scroll',
                                                    overflowX: 'hidden'
                                                }} >
                                                {
                                                    movieTriller.data.results.map(item => (
                                                        <iframe
                                                            key={item.id}
                                                            width="100%"
                                                            height="400"
                                                            src={`https://www.youtube.com/embed/${item.key}`}
                                                            title={item.title}
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                            style={{marginBottom:"20px"}}
                                                            >
                                                        </iframe>
                                                    ))
                                                }
                                            </div>

                                        ) :
                                        (
                                            <img src={Audio} alt="loading" style={{ position: "absolute", top: "200px", right: "600px" }} />
                                        )
                                }
                            </>
                        ) :
                        (
                            <img src={Audio} alt="loading" style={{ position: "absolute", top: "200px", right: "600px" }} />
                        )
                }
            </div>

            {/* RECOMENDATIONS MOVIES */}
            <div className='movies'>
                <h2>Recommendations Movies</h2>

                {
                    recommendationsMovies.isFatched && (
                        recommendationsMovies.data.results.map(item => (
                            <>
                                <LittleCard obj={item} key={item.id} />
                            </>
                        )))
                }
            </div>
        </div>
    )
}

export default SingleMovie