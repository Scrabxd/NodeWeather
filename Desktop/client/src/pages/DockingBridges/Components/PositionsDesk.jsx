import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PositionsDesk.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Select, IconButton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ReportPosition from './ReportPosition';
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

//Icons pagination
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

export default function PositionsDesk({ numPositions, companyName, favoritesOp }) {
    const [favorites, setFavorites] = useState();
    const [positions, setPositions] = useState();
    const [user_id, setUser_id] = useState();
    const [numeration, setNumeration] = useState(numPositions);
    const [paginationPositions, setPaginationPositions] = useState({
        limit: 15,
        offset: 0,
    })
    const favoritesArray = favorites ? favorites.split(',') : [];

    useEffect(() => {
        companyName
            ? getPositionsFromCompany()
            : favoritesOp
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
                setUser_id(res.data.data.id)
                setFavorites(res.data.data.favorites)
                favoritesArray.push(res.data.data.favorites)
            });
    }

    const getPositionsFromCompany = () => {
        axios.post("/positionsInCompany", {
            paginationPositions,
            company_name: companyName
        })
            .then((res) => {
                setPositions(res.data.positions.rows)
                setNumeration(res.data.positions.count)
            })
            .catch(error => {
                console.log(error)
            })
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
        <TableContainer component={Paper} className='positionsDeskContainer'>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ padding: '0px 0px' }} />
                        <TableCell sx={{ padding: '0px 9px' }} align='center'>#</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell align='center'>Category</TableCell>
                        <TableCell align='center'>Report</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        positions ?
                            positions.map((position, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className='positionRowHover'
                                >
                                    <TableCell align='center' sx={{ padding: '9px 6px' }}>
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
                                    </TableCell>
                                    <TableCell
                                        onClick={() => window.open(position.link, '_blank')}
                                        sx={{ padding: '9px 6px' }}
                                        align='center'
                                    >
                                        {paginationPositions.offset + index + 1}
                                    </TableCell>
                                    <TableCell
                                        sx={{ padding: '9px 12px' }}
                                        onClick={() => window.open(position.link, '_blank')}
                                    >
                                        {position.company_name}
                                    </TableCell>
                                    <TableCell
                                        sx={{ padding: '9px 12px' }}
                                        onClick={() => window.open(position.link, '_blank')}
                                    >
                                        {position.position_name}
                                    </TableCell>
                                    <TableCell
                                        sx={{ padding: '9px 12px' }}
                                        onClick={() => window.open(position.link, '_blank')}
                                    >
                                        {position.city}
                                    </TableCell>
                                    <TableCell align='center'
                                        sx={{ padding: '9px 12px' }}
                                        onClick={() => window.open(position.link, '_blank')}
                                    >
                                        {handleCategoryName(position.category_id)}
                                    </TableCell>
                                    <TableCell align='center' sx={{ padding: '9px 0px' }}>
                                        <ReportPosition position={position} user_id={user_id} />
                                    </TableCell>
                                </TableRow>
                            ))
                            :
                            <TableRow>
                                <TableCell align="center" colSpan={7}>
                                    <CircularProgress sx={{ color: '#800180' }} />
                                </TableCell>
                            </TableRow>
                    }
                </TableBody>
            </Table>
            <div className='paginationContainerPositions'>
                <div className='paginationTextPositions'>
                    <span>Positions per page </span>
                    <Select
                        size='small'
                        defaultValue='15'
                        onChange={(e) => (
                            setPaginationPositions({
                                ...paginationPositions, limit: e.target.value
                            })
                        )}
                    >
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                    </Select>
                    <span className='textPagesPositions'>
                        {paginationPositions.offset + 1} - {paginationPositions.offset + paginationPositions.limit > numeration ? numeration : paginationPositions.offset + paginationPositions.limit} of {numeration ? numeration : <CircularProgress size={12} sx={{ color: '#800180', marginLeft: '9px' }} />}
                    </span>
                </div>
                <div className='buttonsPaginationContainer'>
                    <IconButton
                        onClick={() => toggleFirstPage()}
                        size='small'
                        className='buttonPaginationPositions'>
                        <KeyboardDoubleArrowLeftIcon size='large' />
                    </IconButton>
                    <IconButton
                        onClick={() => togglePrevPage()}
                        size='small'
                        className='buttonPaginationPositions'>
                        <KeyboardArrowLeftIcon size='large' />
                    </IconButton>
                    <IconButton
                        onClick={() => toggleNextPage()}
                        size='small'
                        className='buttonPaginationPositions'>
                        <KeyboardArrowRightIcon size='large' />
                    </IconButton>
                    <IconButton
                        onClick={() => toggleLastPage()}
                        size='small'
                        className='buttonPaginationPositions'>
                        <KeyboardDoubleArrowRightIcon size='large' />
                    </IconButton>
                </div>
            </div>
        </TableContainer>
    );
}