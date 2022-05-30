import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';
import styledComponents from "styled-components"

import Audio from "../../assets/loader.svg"
import PaginationComponent from '../../components/Pagination/Pagination';


function TopRated() {

    const [data, setData] = useState({
        isFatched: false,
        data: {},
        error: null,
        totalPages: 0,
    })

    const [activePage, setActivePage] = useState()

    useEffect(() => {
        axios.get(process.env.REACT_APP_MOVIE_API + '/movie/top_rated', {
            params: {
                api_key: process.env.REACT_APP_MOVIE_API_KEY,
                page:activePage,
            }
        })
            .then((response) => {
                setData({
                    isFatched: true,
                    data: response.data,
                    error: false,
                    totalPages: response.data.total_pages > 500 ? 500 : response.data.total_pages
                })
            })
            .catch((error) => {
                setData({
                    isFatched: true,
                    data: false,
                    error: true,
                    totalPages: 0
                })
            })
    }, [activePage])


    return <TopRatedDiv>
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: "20px 10px"
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

        <PaginationComponent totalPages={data.totalPages} setActivePage={setActivePage} />

    </TopRatedDiv>
}

export default TopRated



const TopRatedDiv = styledComponents.div`
display:flex;
flex-direction: column;
align-items: center;
padding: 50px 0px;
`