import React from 'react'
import Pagination from "@mui/material/Pagination"

function PaginationComponent({ totalPages, setActivePage }) {
    return (
        <Pagination count={totalPages} onChange={ (_, num) =>  setActivePage(num)}  showFristButton showLastButton />
    )
}
export default PaginationComponent