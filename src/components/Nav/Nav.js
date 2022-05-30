import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "./nav.css"

import AppBar from '@mui/material/AppBar'
import { IconButton,  Toolbar } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';


function Nav() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));


    const [sidebar, setSidebar] = useState(false)

    const [searchValue, setSearchValue] = useState("")

    const navigate = useNavigate()

    // const handleSearch = (evt) => {
    // setSearchValue(evt.target.value)


    useEffect(() => {
        if (searchValue.length > 0) {
            navigate('search/' + searchValue)
        }
        else {
            navigate('/')
        }
    }, [searchValue])


    // }

    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton
                        onClick={() => setSidebar(!sidebar)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        ZETFLIX
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                    </Search>
                    <input
                        className="input-appbar"
                        type='search'
                        placeholder="Search…"
                        onInput={(evt) => {
                            setSearchValue(evt.target.value)
                        }}
                    />
                </Toolbar>
            </AppBar>

            <Drawer
                anchor={'left'}
                open={sidebar}
                onClose={() => setSidebar(false)}
            >
                <ul className='nav__list'>
                    <li className='nav_item'>
                        <Link to="/" className='nav__link'>Home</Link>
                    </li>
                    <li>
                        <Link to="/movie" className='nav__link'>Popular</Link>
                    </li>
                    <li>
                        <Link to="/top-rated" className='nav__link'>Top Rated</Link>
                    </li>
                </ul>            </Drawer>
        </>
    )
}

export default Nav