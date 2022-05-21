import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Person = () => {

    const { id } = useParams()

    const [person, setPerson] = useState({
        isFatched: false,
        data: {},
        error: null,
    })

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_MOVIE_API + '/person/' + id, {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY,
                }
            })
            .then((response) => {
                setPerson({
                    isFatched: true,
                    data: response.data,
                    error: false,
                })
            })
            .catch((error) => {
                setPerson({
                    isFatched: true,
                    data: {},
                    error: true,
                })
            })
    }, [id])

    console.log(person.data);

    return (
        <div>
            {
                person.isFatched &&

                < >
                    <img  src={`https://image.tmdb.org/t/p/w500/${person.data.profile_path}`} alt={person.data.name} />
                    <h3 >{person.data.name}</h3>
                </>
            }


        </div>


    )
}

export default Person