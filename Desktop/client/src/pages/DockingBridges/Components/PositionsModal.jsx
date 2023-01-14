import React, { useState, useEffect } from 'react';
import './PositionsModal.scss';
import axios from 'axios';
import { Button, Box, CircularProgress } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import ReportPosition from './ReportPosition';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Iconos de Paginación
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

function Row({ position, user_id }) {
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
            <TableRow className='arrowContainerPositionsModal'>
                <TableCell className='arrowTableCellModal'>
                    <IconButton
                        className='arrowIconModal'
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
                                <IconButton sx={{ color: 'red' }}>
                                    <FavoriteBorderIcon />
                                </IconButton>
                                <Button
                                    onClick={() => goToPosition()}
                                    startIcon={<OpenInBrowserIcon />}
                                    fullWidth
                                    sx={{
                                        maxWidth: '200px',
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

export default function PositionsModal({ companyName }) {
    const [positions, setPositions] = useState();
    const [numPositions, setNumPositions] = useState(0);
    const [user_id, setUser_id] = useState();
    const [paginationPositions, setPaginationPositions] = useState({
        limit: 15,
        offset: 0,
    })

    useEffect(() => {
        getPositionsFromCompany();
    }, [paginationPositions])

    useEffect(() => {
        getSession()
    }, [])

    const getPositionsFromCompany = () => {
        axios.post("/positionsInCompany", {
            paginationPositions,
            company_name: companyName
        })
            .then((res) => {
                setPositions(res.data.positions.rows)
                setNumPositions(res.data.positions.count)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const getSession = async () => {
        let { Session } = localStorage;
        Session = JSON.parse(Session);
        Session = await axios.post('/session/get/token', { token: Session }).then(({ data }) => data);
        axios.get("/dataProfile/" + Session.id)
            .then((res) => {
                setUser_id(res.data.data.id);
            });
    }

    const toggleNextPage = () => {
        paginationPositions.offset + paginationPositions.limit > numPositions
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
            offset: numPositions - paginationPositions.limit
        })
    }

    return (
        <div className='positionsModalContainer'>
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
                                <Row key={index} position={position} user_id={user_id} />
                            ))
                        : <TableCell colSpan={3} align='center' >
                            <CircularProgress sx={{color: '#800180'}} />
                        </TableCell>
                    }
                </TableBody>
            </Table>
            <div className='paginationPositionsModal'>
                <IconButton
                    onClick={() => toggleFirstPage()}
                    size='small'
                    className='buttonPaginationPositionsModal'
                >
                    <KeyboardDoubleArrowLeftIcon size='large' />
                </IconButton>
                <IconButton
                    onClick={() => togglePrevPage()}
                    size='small'
                    className='buttonPaginationPositionsModal'
                >
                    <KeyboardArrowLeftIcon size='large' />
                </IconButton>
                <span className='paginationPosModText'>
                    {paginationPositions.offset + 1} - {paginationPositions.offset + paginationPositions.limit > numPositions ? numPositions : paginationPositions.offset + paginationPositions.limit} of {numPositions}
                </span>
                <IconButton
                    onClick={() => toggleNextPage()}
                    size='small'
                    className='buttonPaginationPositionsModal'
                >
                    <KeyboardArrowRightIcon size='large' />
                </IconButton>
                <IconButton
                    onClick={() => toggleLastPage()}
                    size='small'
                    className='buttonPaginationPositionsModal'
                >
                    <KeyboardDoubleArrowRightIcon size='large' />
                </IconButton>
            </div>
        </div>
    );
}