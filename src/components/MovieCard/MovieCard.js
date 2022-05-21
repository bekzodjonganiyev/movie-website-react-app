import React from 'react'
import { Link } from 'react-router-dom'

import "./card.css"

const MovieCard = ({ obj }) => {

    const { id, poster_path, title, release_date, vote_average, } = obj

    return (
        <Link to={`/movie/${id}`} className='card'>
            <div className='card__inner'>
                <span className='card__rating'>{vote_average}</span>
                <img className='card__img' src={"https://image.tmdb.org/t/p/w500" + poster_path} alt="poster_path" width="100%" height="auto    " />
                <h2 className='card_name'>{title}</h2>
                <p className='card__date'>{release_date}</p>
            </div>
        </Link>
    )
}

export default MovieCard