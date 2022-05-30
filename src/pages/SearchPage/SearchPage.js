import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styledComponents from "styled-components"
import MovieCard from '../../components/MovieCard/MovieCard'

import Audio from "../../assets/loader.svg"
import PaginationComponent from '../../components/Pagination/Pagination'


export default function SearchPage() {

    const { searchQuery } = useParams()

    const [activePage, setActivePage] = useState(1)

    const [searchedData, setSearchedData] = useState(
        {
            isFatched: false,
            data: {},
            error: null,
            totalPages: 0
        }
    )

    useEffect(() => {
        axios.get(process.env.REACT_APP_MOVIE_API + '/search/movie?query=' + searchQuery, {
            params: {
                api_key: process.env.REACT_APP_MOVIE_API_KEY,
                page: activePage,
                adult: true
            }
        })
            .then((response) => {
                setSearchedData({
                    isFatched: true,
                    data: response.data,
                    error: false,
                    totalPages: response.data.total_pages > 500 ? 500 : response.data.total_pages
                })

                console.log(response.data);
            })
            .catch((error) => {
                setSearchedData({
                    isFatched: true,
                    data: false,
                    error: error,
                    totalPages: 0
                })
                console.log(error.data);
            })
    }, [activePage, searchQuery])



    return (
        <StyledSearchPageDiv>
            <MovieWrapper>
                {
                    searchedData.isFatched ? (
                        searchedData.data.results.map(item => (
                            <MovieCard obj={item} key={item.id} />
                        ))
                    ) : (
                        <img src={Audio} alt="loader" style={{ position: "absolute", top: "200px", right: "600px" }} />
                    )
                }
            </MovieWrapper>
            <PaginationWrapper>
                <PaginationComponent totalPages={searchedData.totalPages} setActivePage={setActivePage} />
            </PaginationWrapper>
        </StyledSearchPageDiv>
    )
}


const StyledSearchPageDiv = styledComponents.div`
padding:50px
`

const MovieWrapper = styledComponents.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
padding: 20px 10px;
`

const PaginationWrapper = styledComponents.div`
margin-left: 400px ;
`
