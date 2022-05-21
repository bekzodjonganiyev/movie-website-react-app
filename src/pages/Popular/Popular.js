import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';

import Audio from "../../assets/loader.svg"


function Popular() {

    const [data, setData] = useState({
        isFatched: false,
        data: {},
        error: null,
    })

    useEffect(() => {
        axios.get(process.env.REACT_APP_MOVIE_API + '/movie/popular', {
            params: {
                api_key: process.env.REACT_APP_MOVIE_API_KEY
            }
        })
            .then((response) => {
                setData({
                    isFatched: true,
                    data: response.data,
                    error: false,
                })
            })
            .catch((error) => {
                setData({
                    isFatched: true,
                    data: false,
                    error: error,
                })
            })
    }, [])

    return <>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            flexWrap:"wrap",
            padding:"20px 10px"
        }}>
            {
                data.isFatched ? (
                    data.data.results.map(item => (
                        <MovieCard obj={item} key={item.poster_path} />
                    ))
                ) : (
                    <img src={Audio} alt="loader" style={{ position: "absolute", top: "200px", right: "600px" }} />
                )
            }
        </div>


    </>
}

export default Popular