import React from 'react'
import { Link } from 'react-router-dom'

import "./actors.css"

const Actors = ({ obj }) => {

    const { profile_path, name, id } = obj

    return (
        <Link to={`/person/${id}`} className="link">
            <div className='actors-card'>
                <img className='actors-card__img' src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
                <h3 className='actors-card__title'>{name}</h3>
            </div>
        </Link>
    )
}

export default Actors