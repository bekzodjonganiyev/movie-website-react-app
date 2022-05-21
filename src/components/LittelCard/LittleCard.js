import React from 'react'
import { Link } from 'react-router-dom'

import "./littleCard.css"

const LittleCard = ({ obj }) => {

    const { poster_path, title, id } = obj

    return (
        <Link to={`/movie/${id}`} className="link">
            <div className='little-card'>
                <img className='little-card__img' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                <h3 className='little-card__title'>{title}</h3>
            </div>
        </Link>
    )
}

export default LittleCard