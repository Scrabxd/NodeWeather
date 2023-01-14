import React, { useState, useEffect } from 'react';
import './PositionsMobile.scss';
import axios from 'axios';
import { Box } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material/';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReportPosition from './ReportPosition';

// Iconos de Paginación
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

function Row({ position, user_id, favorites, quitFavoritePosition, setFavoritePosition }) {
    const [open, setOpen] = useState(false);

    const goToPosition = () => {
        window.open(position.link, '_blank');
    }

    const handleCategoryName = (source) => {
        switch (source) {
            case 0:
                return 'Business'
                break;
            case 1:
                return 'Industrial/Quality/Test'
                break;
            case 2:
                return 'IT'
                break;
            case 3:
                return 'Software Engineer'
                break;
            case 4:
                return 'Mechanical Engineer'
                break;
            case 5:
                return 'Project Manager'
                break;
            case 6:
                return 'Other'
                break;
        }
    }

    return (
        <>
            <TableRow className='arrowContainerPositions'>
                <TableCell className='arrowTableCell'>
                    <IconButton
                        className='arrowIcon'
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell sx={{ padding: '6px 6px' }} component="th" scope="row">
                    {position.position_name}
                </TableCell>
                <TableCell sx={{ padding: '6px 6px' }} align="center">
                    {position.company_name}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ padding: '0 0' }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases" sx={{ backgroundColor: '#054b5d15' }}>
                                <TableBody>
                                    <TableRow>
                                        <TableCell sx={{ border: '3px solid #F2F2F2' }}>
                                            City
                                        </TableCell>
                                        <TableCell sx={{ border: '3px solid #F2F2F2', paddingX: '3px' }} colSpan={2}>
                                            {position.city}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ border: '3px solid #F2F2F2' }}>
                                            Category
                                        </TableCell>
                                        <TableCell sx={{ border: '3px solid #F2F2F2', paddingX: '3px' }} colSpan={2}>
                                            {handleCategoryName(position.category_id)}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 9 }}>
                                {
                                    favorites && favorites.includes(position.id)
                                        ? <IconButton
                                            onClick={() => quitFavoritePosition(position.id)}
                                            sx={{ color: 'red' }}
                                        >
                                            <FavoriteIcon />
                                        </IconButton>
                                        : <IconButton
                                            onClick={() => setFavoritePosition(position.id)}
                                            sx={{ color: 'red' }}
                                        >
                                            <FavoriteBorderIcon />
                                        </IconButton>
                                }
                                <Button
                                    onClick={() => goToPosition()}
                                    startIcon={<OpenInBrowserIcon />}
                                    fullWidth
                                    sx={{
                                        backgroundColor: '#054b5d',
                                        color: 'white'
                                    }}>
                                    Postularme
                                </Button>
                                <ReportPosition position={position} user_id={user_id} />
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function PositionsMobile({ numPositions, favoritesOp }) {
    const [favorites, setFavorites] = useState();
    const [positions, setPositions] = useState();
    const [user_id, setUser_id] = useState();
    const [numeration, setNumeration] = useState(numPositions);
    const [paginationPositions, setPaginationPositions] = useState({
        limit: 20,
        offset: 0,
    })
    const favoritesArray = favorites ? favorites.split(',') : [];

    useEffect(() => {
        favoritesOp
            ? getFavorites()
            : getPositions()
    }, [paginationPositions, favorites])

    useEffect(() => {
        getSession()
    }, [])

    const getSession = async () => {
        let { Session } = localStorage;
        Session = JSON.parse(Session);
        Session = await axios.post('/session/get/token', { token: Session }).then(({ data }) => data);
        axios.get("/dataProfile/" + Session.id)
            .then((res) => {
                setUser_id(res.data.data.id);
                setFavorites(res.data.data.favorites)
                favoritesArray.push(res.data.data.favorites)
            });
    }

    const getFavorites = async () => {
        const favoritesObject = []
        favoritesArray.forEach((favorite) => {
            favoritesObject.push({ id: parseInt(favorite) })
        })
        await axios.post("/getFavorites", {
            favoritesObject,
            paginationPositions
        })
            .then(({ data }) => {
                setPositions(data.positions.rows)
                setNumeration(data.positions.count)
            }).catch((err) => {
                console.log(err)
            })
    }

    const getPositions = () => {
        axios.post("/getAllPositions", { paginationPositions })
            .then(({ data }) => {
                setPositions(data.positions)
            }).catch((err) => {
                console.log(err)
            })
    }

    const setFavoritePosition = (position_id) => {
        favoritesArray.push(position_id)
        const favoritesString = favoritesArray.join(',');
        axios.put("/setFavoritePosition", { user_id, favoritesString })
            .then(({ data }) => {
                setFavorites(favoritesString)
            }).catch((err) => {
                console.log(err)
            })
    }

    const quitFavoritePosition = (position_id) => {
        const newArray = favoritesArray.filter((favorite) => favorite != position_id)
        const favoritesString = newArray.join(',');
        axios.put("/quitFavoritePosition", { user_id, favoritesString })
            .then(({ data }) => {
                setFavorites(favoritesString)
            }).catch((err) => {
                console.log(err)
            })
    }

    const toggleNextPage = () => {
        paginationPositions.offset + paginationPositions.limit > numeration
            ? ''
            : setPaginationPositions({
                ...paginationPositions,
                offset: paginationPositions.offset + paginationPositions.limit
            })
    }

    const togglePrevPage = () => {
        paginationPositions.offset - paginationPositions.limit <= -1
            ? setPaginationPositions({
                ...paginationPositions,
                offset: 0
            })
            : setPaginationPositions({
                ...paginationPositions,
                offset: paginationPositions.offset - paginationPositions.limit
            })
    }

    const toggleFirstPage = () => {
        setPaginationPositions({
            ...paginationPositions,
            offset: 0
        })
    }

    const toggleLastPage = () => {
        setPaginationPositions({
            ...paginationPositions,
            offset: numeration - paginationPositions.limit
        })
    }

    return (
        <div className='tableContainerPositions'>
            <Table aria-label="collapsible table" stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ padding: '0px 0px' }} />
                        <TableCell>Job Posting</TableCell>
                        <TableCell align="center">Company</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        positions ?
                            positions.map((position, index) => (
                                <Row
                                    key={index}
                                    user_id={user_id}
                                    position={position}
                                    favorites={favorites}
                                    quitFavoritePosition={quitFavoritePosition}
                                    setFavoritePosition={setFavoritePosition}
                                />
                            ))
                            : null
                    }
                </TableBody>
            </Table>
            <div className='paginationPositionsMobile'>
                <IconButton
                    onClick={() => toggleFirstPage()}
                    size='small'
                    className='buttonPaginationPositionsMobile'
                >
                    <KeyboardDoubleArrowLeftIcon size='large' />
                </IconButton>
                <IconButton
                    onClick={() => togglePrevPage()}
                    size='small'
                    className='buttonPaginationPositionsMobile'
                >
                    <KeyboardArrowLeftIcon size='large' />
                </IconButton>
                <span className='paginationPosMobModText'>
                    {paginationPositions.offset + 1} - {paginationPositions.offset + paginationPositions.limit > numeration ? numeration : paginationPositions.offset + paginationPositions.limit} of {numeration}
                </span>
                <IconButton
                    onClick={() => toggleNextPage()}
                    size='small'
                    className='buttonPaginationPositionsMobile'
                >
                    <KeyboardArrowRightIcon size='large' />
                </IconButton>
                <IconButton
                    onClick={() => toggleLastPage()}
                    size='small'
                    className='buttonPaginationPositionsMobile'
                >
                    <KeyboardDoubleArrowRightIcon size='large' />
                </IconButton>
            </div>
        </div>
    );
}